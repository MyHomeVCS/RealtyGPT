import { FC, useEffect, useState } from 'react';
import { socket } from 'src/services/soketConnector';
import { Spin } from 'antd';
import { EmptyConversation } from 'src/components/chat/EmptyConversation';

export const ChatConversation: FC = () => {
  const [conversation, updateConverstion] = useState([]);

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      socket.emit('message-start');
    };

    const onDisconnect = () => setIsConnected(false);

    const onFooEvent = (...value) => {
      console.log('value', value);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('updateMessageList', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
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
