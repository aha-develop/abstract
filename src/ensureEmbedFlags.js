// https://sdk.goabstract.com/docs/embed/
export const ensureEmbedFlags = (url) => {
  if (!url) return

  if (url.includes('abstract.com/embed')) {
    return url
  } else {
    const match = url.match(/\/([a-f0-9\-]+)[\?$]/)
    if (match) {
      const uuid = match[1]
      return `https://app.goabstract.com/embed/${uuid}`
    }

    return url
  }
}