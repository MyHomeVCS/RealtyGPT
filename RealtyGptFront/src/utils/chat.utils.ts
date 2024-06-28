import { createSession, getUserId } from 'src/services/getSessionId';
import { IInitUser } from 'src/interfaces/chat';
import { ESupportedLanguages } from 'src/interfaces/configs';

export const getInitialUserData = (language: ESupportedLanguages): IInitUser => {
  const userId = getUserId();
  const sessionId = createSession();
  return {
    userId,
    sessionId,
    language,
  };
};
