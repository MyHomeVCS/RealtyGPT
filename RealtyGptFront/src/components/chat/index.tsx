import { FC, useEffect, useState } from 'react';
import { ChatConversation } from 'src/components/chat/ChatConversation';
import { ChatTextArea } from 'src/components/chat/ChatTextArea';
import { EMessageRole, IDataMessage, IMessage } from 'src/interfaces/message';
import { socket } from 'src/services/soketConnector';
import { getInitialUserData } from 'src/utils/chat.utils';
import { TAiDataResponse } from 'src/interfaces/apartments';
import { Button, Tooltip } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { setUserId } from 'src/services/getSessionId';
import bgImg from '../../assets/background.jpg';
import { LanguageSwitcher } from 'src/components/LanguageSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { setConfigs } from 'src/store/actions/configs.actions';
import { ESupportedLanguages } from 'src/interfaces/configs';
import './index.css';

export const Chat: FC = () => {
  const [conversation, setConversation] = useState<(IMessage | IDataMessage)[]>([]);

  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isAiTyping, setIsAiTyping] = useState(true);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const language = useSelector(state => state.configs).language;

  useEffect(() => {
    const onData = (apartmentData: TAiDataResponse) => {
      console.log('apartmentData', apartmentData);
      setConversation(prev => [...prev, { role: EMessageRole.assistant, content: apartmentData, type: 'data' }]);
    };

    const onConnect = () => {
      setIsConnected(true);
      socket.emit('init-user', getInitialUserData(language));
    };

    const onDisconnect = () => setIsConnected(false);

    const onMessageEvent = ({ content, language }: { content: string; language: ESupportedLanguages }) => {
      setIsAiTyping(false);
      dispatch(setConfigs({ language }));
      setConversation(prev => [...prev, { role: EMessageRole.assistant, content }]);
    };

    // socket.on('change-language', onChangeLanguage);
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessageEvent);
    socket.on('data', onData);

    return () => {
      // socket.off('change-language', onChangeLanguage);
      socket.off('data', onData);
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessageEvent);
    };
  }, []);

  const resetUserSession = () => {
    setUserId('null');
    window.location.reload();
  };

  return (
    <div
      className="chatWrapper"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="chatContainer">
        <div className="chatHeader">
          <div className="title">Realty GPT</div>
          <div className="actionBar">
            <LanguageSwitcher />
            <Tooltip title="Reset Session">
              <Button onClick={resetUserSession}>
                <ReloadOutlined />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div className="chatContentContainer">
          <ChatConversation conversation={conversation} isConnected={isConnected} isAiTyping={isAiTyping} />

          <ChatTextArea disabled={isAiTyping || !isConnected} setConversation={setConversation} setIsAiTyping={setIsAiTyping} />
        </div>
      </div>
    </div>
  );
};
