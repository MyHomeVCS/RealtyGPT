import { FC, useState } from 'react';
import { socket } from 'src/services/soketConnector';
import { Button, Input } from 'antd';
import { IMessageDto } from 'src/interfaces/chat';
import { getUserId } from 'src/services/getSessionId';

const USER_ID = getUserId();
export const ChatTextArea: FC = () => {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    const message: IMessageDto = {
      userId: USER_ID,
      content: value,
      from: 'me',
    };
    setValue('');
    socket.emit('message', message);
  };

  return (
    <div className="chatTextArea">
      <Input.TextArea value={value} onChange={e => setValue(e.target.value)} placeholder="Controlled autosize" autoSize={{ minRows: 3, maxRows: 5 }} />
      <Button type="primary" disabled={!value.length} onClick={onSubmit}>
        Send
      </Button>
    </div>
  );
};
