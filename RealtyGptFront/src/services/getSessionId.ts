export const getRandomId = () => (Math.random() + 1).toString(36).substring(7);

export const setUserId = (userId: string = getRandomId()) => {
  localStorage.setItem('userId', `${userId}`);
  return userId;
};

export const cleanUserId = () => {
  setUserId('null');
};

export const getUserId = (): string => {
  const userIdStorage = localStorage.getItem('userId');
  if (userIdStorage) {
    return userIdStorage;
  }

  return setUserId();
};

export const createSession = () => {
  return getRandomId();
};
