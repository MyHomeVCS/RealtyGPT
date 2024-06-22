import { FC } from 'react';
import { IDataMessage } from 'src/interfaces/message';
import './index.css';
import { BasicMessage, IMessageWithJsxContent } from 'src/components/message/BasicMessage';
import { DataMessage } from 'src/components/message/DataMessage';

export interface IMessageProps {
  message: IMessageWithJsxContent | IDataMessage;
}

export const Message: FC<IMessageProps> = ({ message }) => {
  return <div className={`chatMessageItem ${message.role}`}>{'type' in message ? <DataMessage message={message} /> : <BasicMessage message={message} />}</div>;
};
