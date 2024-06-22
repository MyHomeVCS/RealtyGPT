import { Dispatch, FC, KeyboardEventHandler, memo, SetStateAction, useState } from 'react';
import { socket } from 'src/services/soketConnector';
import { Button, Input } from 'antd';
import { IMessageDto } from 'src/interfaces/chat';
import { getUserId } from 'src/services/getSessionId';
import { ArrowUpOutlined } from '@ant-design/icons';
import './index.css';
import { IMessage } from 'src/interfaces/message';

const USER_ID = getUserId();

interface IChatTextArea {
  setConversation: Dispatch<SetStateAction<IMessage[]>>;
  setIsAiTyping: Dispatch<SetStateAction<boolean>>;
}
export const ChatTextArea: FC<IChatTextArea> = memo(({ setConversation, setIsAiTyping }) => {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    const message: IMessageDto = {
      userId: USER_ID,
      content: value,
      from: 'me',
    };
    setValue('');
    socket.emit('message', message);
    setIsAiTyping(true);
    setConversation(prev => [...prev, { content: value, role: 'user' }]);
  };
  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  };

  return (
    <div className="chatTextArea">
      <Input.TextArea
        onKeyDown={onKeyDown}
        onSubmit={e => {
          console.log(e, 'submit');
        }}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Ask RealtyGPT"
        autoSize={{ minRows: 1 }}
      />
      <Button onClick={onSubmit} disabled={!value.trim()} type="primary" shape="circle" icon={<ArrowUpOutlined />} />
    </div>
  );
});
