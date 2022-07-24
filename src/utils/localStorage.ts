export function set<T>(key: string, payload: T[]) {
  console.log({ payload });
  localStorage.setItem(key, JSON.stringify(payload));
  return;
}

export function get<T>(key: string): T {
  const localStorageData = localStorage.getItem(key) ?? "[]";
  return JSON.parse(localStorageData);
}
