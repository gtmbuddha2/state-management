export type User = {
  id: string;
  name: string;
};

// This function simulates successful authentication for a user called Bob
export function authenticate(): Promise<User> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ id: '1', name: 'Bob' }), 1000)
  );
}
