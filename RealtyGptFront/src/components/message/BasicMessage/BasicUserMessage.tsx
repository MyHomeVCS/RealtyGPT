import { FC } from 'react';
import { IMessage } from 'src/interfaces/message';

interface IBasicUserMessageProps extends IPropsWithChildren {
  message: IMessage;
}

export const BasicUserMessage: FC<IBasicUserMessageProps> = ({ message }) => {
  return (
    <>
      <div className="chatMessageContent">
        <pre> {message.content} </pre>
      </div>
    </>
  );
};
