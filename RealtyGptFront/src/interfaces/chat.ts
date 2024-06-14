export interface IMessageDto {
  userId: string;
  id?: boolean;
  from: string;
  content: string;
  edited?: boolean;
}

export interface IInitUser {
  userId: string;
  sessionId: string;
}
