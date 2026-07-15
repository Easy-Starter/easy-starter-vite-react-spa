import { lazy, Suspense } from 'react'

const RouterDevtools = import.meta.env.DEV
  ? lazy(async () => {
      const module = await import('@tanstack/react-router-devtools')
      return { default: module.TanStackRouterDevtools }
    })
  : null

const QueryDevtools = import.meta.env.DEV
  ? lazy(async () => {
      const module = await import('@tanstack/react-query-devtools')
      return { default: module.ReactQueryDevtools }
    })
  : null

export function AppDevtools() {
  if (!RouterDevtools || !QueryDevtools) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <RouterDevtools position="bottom-right" />
      <QueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
    </Suspense>
  )
}
