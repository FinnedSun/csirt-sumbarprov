const ADMIN_IDS = [
  'user_2wktfSLTVjR5ueHeqxpLzYl4hI7',
] as const;

export const isAdmin = (userId: string) => {
  return ADMIN_IDS.some(id => id === userId);
}