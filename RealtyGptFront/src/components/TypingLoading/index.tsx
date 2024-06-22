import { FC } from 'react';
import './index.css';
import { Message } from 'src/components/message';

export const TypingLoading: FC = () => {
  return <Message message={{ role: 'assistant', content: <div className="typing-loader" /> }} />;
};
