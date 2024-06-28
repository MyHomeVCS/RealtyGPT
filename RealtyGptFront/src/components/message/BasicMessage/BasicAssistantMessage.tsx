import { FC } from 'react';
import { AssistantIcon } from 'src/components/chat/AsistantIcon';
import { IMessage } from 'src/interfaces/message';
import { useTypingImitation } from 'src/hooks/useTypingImitation';

interface IBasicAssistantMessageProps extends IPropsWithChildren {
  message: IMessage;
}

export const BasicAssistantMessage: FC<IBasicAssistantMessageProps> = ({ message, children }) => {
  const text = useTypingImitation(message.content);

  return (
    <>
      <AssistantIcon />
      <div className="chatMessageContent">
        <pre> {children ?? text} </pre>
      </div>
    </>
  );
};
