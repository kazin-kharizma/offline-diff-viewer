export function doUrlSafeBase64(decoded: string) {
  return decoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function undoUrlSafeBase64(_encoded: string) {
  let encoded = _encoded.replace(/-/g, '+').replace(/_/g, '/')
  while (encoded.length % 4) encoded += '='
  return encoded
}

export function urlEncode(unencoded: string): string {
  let encoded = globalThis.btoa(unencoded)
  return doUrlSafeBase64(encoded)
}

export function urlDecode(_encoded: string): string {
  const encoded = undoUrlSafeBase64(_encoded)
  return globalThis.atob(encoded)
}