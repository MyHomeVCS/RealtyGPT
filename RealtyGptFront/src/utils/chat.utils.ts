import { createSession, getUserId } from 'src/services/getSessionId';
import { IInitUser } from 'src/interfaces/chat';

export const getInitialUserData = (): IInitUser => {
  const userId = getUserId();
  const sessionId = createSession();
  return {
    userId,
    sessionId,
  };
};
