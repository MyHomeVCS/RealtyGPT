import { FC } from 'react';
import { EMessageRole, IMessage } from 'src/interfaces/message';
import { BasicUserMessage } from 'src/components/message/BasicMessage/BasicUserMessage';
import { BasicAssistantMessage } from 'src/components/message/BasicMessage/BasicAssistantMessage';

interface IBasicMessageProps extends IPropsWithChildren {
  message: IMessage;
  loading?: boolean;
}

export const BasicMessage: FC<IBasicMessageProps> = ({ message, children }) => {
  return message.role === EMessageRole.user ? (
    <BasicUserMessage message={message}>{children}</BasicUserMessage>
  ) : (
    <BasicAssistantMessage message={message}>{children}</BasicAssistantMessage>
  );
};
