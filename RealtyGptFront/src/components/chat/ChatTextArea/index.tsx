import { ChangeEventHandler, Dispatch, FC, KeyboardEventHandler, memo, SetStateAction, useState } from 'react';
import { socket } from 'src/services/soketConnector';
import { Button, Input } from 'antd';
import { IMessageDto } from 'src/interfaces/chat';
import { getUserId } from 'src/services/getSessionId';
import { ArrowUpOutlined } from '@ant-design/icons';
import './index.css';
import { EMessageRole, IDataMessage, IMessage } from 'src/interfaces/message';

const USER_ID = getUserId();

interface IChatTextArea {
  setConversation: Dispatch<SetStateAction<(IMessage | IDataMessage)[]>>;
  setIsAiTyping: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
}
export const ChatTextArea: FC<IChatTextArea> = memo(({ setConversation, setIsAiTyping, disabled }) => {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    if (disabled) {
      return;
    }
    const message: IMessageDto = {
      userId: USER_ID,
      content: value,
      from: 'me',
    };
    setValue('');
    socket.emit('message', message);
    setIsAiTyping(true);
    setConversation(prev => [...prev, { content: value, role: EMessageRole.user }]);
  };
  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onSubmit();
    }
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    if (disabled) {
      return;
    }
    setValue(e.target.value);
  };

  return (
    <div className="chatTextArea">
      <Input.TextArea
        disabled={disabled}
        onKeyDown={onKeyDown}
        onSubmit={e => {
          console.log(e, 'submit');
        }}
        value={value}
        onChange={onChange}
        placeholder="Ask RealtyGPT"
        autoSize={{ minRows: 1 }}
      />
      <Button onClick={onSubmit} disabled={disabled || !value.trim()} type="primary" shape="circle" icon={<ArrowUpOutlined />} />
    </div>
  );
});
