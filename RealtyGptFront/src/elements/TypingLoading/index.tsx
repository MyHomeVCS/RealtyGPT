import { FC } from 'react';
import 'src/elements/TypingLoading/index.css';
import { EMessageRole } from 'src/interfaces/message';
import { DynamicMessage } from 'src/components/message';

export const TypingLoading: FC = () => {
  return (
    <DynamicMessage message={{ role: EMessageRole.assistant, content: '' }}>
      <div className="typing-loader" />
    </DynamicMessage>
  );
};
