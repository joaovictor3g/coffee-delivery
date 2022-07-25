export function set<T>(key: string, payload: T[]) {
  localStorage.setItem(key, JSON.stringify(payload));
}

export function get<T>(key: string): T {
  const localStorageData = localStorage.getItem(key) ?? "[]";
  return JSON.parse(localStorageData);
}
