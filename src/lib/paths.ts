const rawBase = import.meta.env.BASE_URL;
const normalizedBase = rawBase === '/' ? '/' : `${rawBase.replace(/\/$/, '')}/`;

export function withBase(path = '') {
  return `${normalizedBase}${path.replace(/^\//, '')}`;
}
