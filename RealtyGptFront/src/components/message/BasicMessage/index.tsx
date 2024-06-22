import { FC, ReactElement } from 'react';
import { AssistantIcon } from 'src/components/chat/AsistantIcon';
import { IMessage } from 'src/interfaces/message';

export interface IMessageWithJsxContent extends Omit<IMessage, 'content'> {
  content: string | ReactElement;
}

interface IBasicMessageProps {
  message: IMessageWithJsxContent;
}

export const BasicMessage: FC<IBasicMessageProps> = ({ message }) => {
  return (
    <>
      {message.role === 'assistant' && <AssistantIcon />}
      <div> {message.content} </div>
    </>
  );
};
