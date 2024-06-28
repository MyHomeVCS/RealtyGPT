import { FC } from 'react';
import { IDataMessage, IMessage } from 'src/interfaces/message';
import { BasicMessage } from 'src/components/message/BasicMessage';
import { DataMessage } from 'src/components/message/DataMessage';
import './index.css';

export interface IMessageProps {
  message: IMessage | IDataMessage;
}

export const Message: FC<IMessageProps> = ({ message }) => {
  return <div className={`chatMessageItem ${message.role}`}>{'type' in message ? <DataMessage message={message} /> : <BasicMessage message={message} />}</div>;
};

export interface IDynamicMessageProps extends IPropsWithChildren {
  message: IMessage;
}

export const DynamicMessage: FC<IDynamicMessageProps> = ({ message, children }) => {
  return (
    <div className={`chatMessageItem ${message.role}`}>
      <BasicMessage message={message}>{children}</BasicMessage>
    </div>
  );
};
