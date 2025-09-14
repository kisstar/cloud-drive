/**
 * create error object
 * @param errorInfo error message
 * @returns error object
 */
function createError(errorInfo: Record<string, unknown> & { message: string }) {
  const error = new Error(errorInfo.message)
  const newErrorInfo = { ...errorInfo }

  newErrorInfo.isFffError = true
  Object.setPrototypeOf(newErrorInfo, error)

  return newErrorInfo
}

export { createError }
