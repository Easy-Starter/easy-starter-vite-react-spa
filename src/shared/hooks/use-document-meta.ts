import { useEffect } from 'react'

interface DocumentMetaOptions {
  title: string
  description?: string
}

export function useDocumentMeta({ title, description }: DocumentMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    let descriptionElement = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const createdDescriptionElement = !descriptionElement
    const previousDescription = descriptionElement?.content

    if (description) {
      if (!descriptionElement) {
        descriptionElement = document.createElement('meta')
        descriptionElement.name = 'description'
        document.head.append(descriptionElement)
      }
      descriptionElement.content = description
    }

    return () => {
      document.title = previousTitle
      if (descriptionElement && createdDescriptionElement) {
        descriptionElement.remove()
      } else if (descriptionElement && previousDescription !== undefined) {
        descriptionElement.content = previousDescription
      }
    }
  }, [description, title])
}
