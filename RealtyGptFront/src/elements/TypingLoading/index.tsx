import { FC } from 'react';
import 'src/elements/TypingLoading/index.css';
import { Message } from 'src/components/message';

export const TypingLoading: FC = () => {
  return <Message message={{ role: 'assistant', content: <div className="typing-loader" /> }} />;
};
