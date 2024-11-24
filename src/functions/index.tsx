export const nvl = (value?: string | number | null): string => {
  return value != null ? String(value) : ''
}
