import { FC, useEffect, useState } from 'react';
import { socket } from 'src/services/soketConnector';
import { message, Spin } from 'antd';
import { EmptyConversation } from 'src/components/chat/EmptyConversation';
import { getInitialUserData } from 'src/utils/chat.utils';

const INITIAL_USER_DATA = getInitialUserData();

export const ChatConversation: FC = () => {
  const [conversation, updateConverstion] = useState<any>([]);

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      socket.emit('init-user', INITIAL_USER_DATA);
    };

    const onDisconnect = () => setIsConnected(false);

    const onMessageEvent = value => {
      console.log('value', value);
      updateConverstion(prev => [...prev, { content: value, date: Math.random() }]);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);

  return (
    <div className="chatConversation">
      {!isConnected && <Spin />}
      {!conversation.length ? (
        <EmptyConversation />
      ) : (
        conversation.map(({ date, content }) => (
          <div key={date} className="chatMessageItem">
            <div> {content} </div>
          </div>
        ))
      )}
    </div>
  );
};
