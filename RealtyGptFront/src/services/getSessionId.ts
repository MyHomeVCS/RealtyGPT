export const getUserId = (): string => {
  const userIdStorage = localStorage.getItem('userId');
  if (userIdStorage) {
    return userIdStorage;
  }

  const userId = (Math.random() + 1).toString(36).substring(7);
  localStorage.setItem('userId', userId);
  return userId;
};
