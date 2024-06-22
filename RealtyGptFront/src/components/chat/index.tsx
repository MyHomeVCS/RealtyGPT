import { FC, useEffect, useState } from 'react';
import { ChatConversation } from 'src/components/chat/ChatConversation';
import { ChatTextArea } from 'src/components/chat/ChatTextArea';
import { IDataMessage, IMessage } from 'src/interfaces/message';
import { socket } from 'src/services/soketConnector';
import { getInitialUserData } from 'src/utils/chat.utils';
import { TAiDataResponse } from 'src/interfaces/apartments';

const INITIAL_USER_DATA = getInitialUserData();

export const Chat: FC = () => {
  const [conversation, setConversation] = useState<(IMessage | IDataMessage)[]>([]);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isAiTyping, setIsAiTyping] = useState(true);

  useEffect(() => {
    const onData = (apartmentData: TAiDataResponse) => {
      console.log('apartmentData', apartmentData);
      setConversation(prev => [...prev, { role: 'assistant', content: apartmentData, type: 'data' }]);
      // console.log('ON DATA', args);
    };

    const onConnect = () => {
      setIsConnected(true);
      socket.emit('init-user', INITIAL_USER_DATA);
    };

    const onDisconnect = () => setIsConnected(false);

    const onMessageEvent = (content: string) => {
      setIsAiTyping(false);
      setConversation(prev => [...prev, { role: 'assistant', content }]);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);
    socket.on('data', onData);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);

  return (
    <div className="chatWrapper">
      <div className="chatContainer">
        <div className="chatHeader">
          <div className="title">Realty GPT</div>
        </div>

        <div className="chatContentContainer">
          <ChatConversation conversation={conversation} isConnected={isConnected} isAiTyping={isAiTyping} />

          <ChatTextArea setConversation={setConversation} setIsAiTyping={setIsAiTyping} />
        </div>
      </div>
    </div>
  );
};
