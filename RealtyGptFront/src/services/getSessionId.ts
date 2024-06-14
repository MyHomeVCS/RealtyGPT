export const getRandomId = () => (Math.random() + 1).toString(36).substring(7);

export const getUserId = (): string => {
  const userIdStorage = localStorage.getItem('userId');
  if (userIdStorage) {
    return userIdStorage;
  }

  const userId = getRandomId();
  localStorage.setItem('userId', userId);
  return userId;
};

export const createSession = () => {
  return getRandomId();
};
