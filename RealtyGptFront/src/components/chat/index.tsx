import { FC } from 'react';
import { ChatConversation } from 'src/components/chat/ChatConversation';
import { ChatTextArea } from 'src/components/chat/ChatTextArea';

export const Chat: FC = () => {
  return (
    <div className="chatWrapper">
      <div className="chatContainer">
        <div className="chatHeader">
          <div className="title">Realty GPT</div>
        </div>

        <div className="chatContentContainer">
          <ChatConversation />

          <ChatTextArea />
        </div>
      </div>
    </div>
  );
};
