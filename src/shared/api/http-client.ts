import type { ZodType } from 'zod'

import { env } from '@/shared/config/env'

interface RequestOptions<T> extends Omit<RequestInit, 'body'> {
  body?: unknown
  schema?: ZodType<T>
}

export class ApiError extends Error {
  readonly status: number
  readonly details: unknown

  constructor(message: string, status: number, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

export class HttpClient {
  constructor(private readonly baseUrl = '') {}

  async request<T>(path: string, options: RequestOptions<T> = {}): Promise<T> {
    const { body, headers, schema, ...init } = options
    const requestHeaders = new Headers(headers)
    requestHeaders.set('Accept', 'application/json')

    if (body !== undefined && !requestHeaders.has('Content-Type')) {
      requestHeaders.set('Content-Type', 'application/json')
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const url = /^https?:\/\//.test(path) ? path : `${this.baseUrl}${normalizedPath}`

    const response = await fetch(url, {
      ...init,
      headers: requestHeaders,
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    })

    if (response.status === 204) {
      return undefined as T
    }

    const contentType = response.headers.get('content-type') ?? ''
    const payload: unknown = contentType.includes('application/json')
      ? await response.json()
      : await response.text()

    if (!response.ok) {
      const message =
        typeof payload === 'object' && payload !== null && 'message' in payload
          ? String(payload.message)
          : `Request failed with status ${response.status}`

      throw new ApiError(message, response.status, payload)
    }

    return schema ? schema.parse(payload) : (payload as T)
  }

  get<T>(path: string, options: Omit<RequestOptions<T>, 'method' | 'body'> = {}) {
    return this.request<T>(path, { ...options, method: 'GET' })
  }

  post<T>(
    path: string,
    body?: unknown,
    options: Omit<RequestOptions<T>, 'method' | 'body'> = {},
  ) {
    return this.request<T>(path, { ...options, body, method: 'POST' })
  }
}

export const apiClient = new HttpClient(env.apiBaseUrl)
export const staticClient = new HttpClient()
