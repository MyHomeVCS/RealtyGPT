import './App.css'
import {FC, useEffect, useState} from "react";
import {Button, Input} from "antd";
import {socket} from "../src/services/soketConnector";

export function App() {

  return (
    <div className="chatWrapper">
      <div className="chatContainer">
        <ChatHeader />
        <ChatContent />
      </div>
    </div>
  )
}


const ChatHeader: FC = () => {
  return <div className="chatHeader">
    <div className="title">
      Realty GPT
    </div>
  </div>
}

const ChatContent: FC = () => {

  return <div className="chatContentContainer">

    <ChatConversation />

    <ChatTextArea />

  </div>
}


const ChatConversation: FC = () => {

  const [conversation, updateConverstion] = useState([]);

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      alert('CONNECTED')
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  const data = [{from: '', date: '', content: 'S'}]

  return <div className="chatConversation">

    {data.map(({date,  content}) =>
      (<div key={date} className="chatMessageItem">
        <div> {content} </div>
      </div>)
    )}

  </div>
}


const ChatTextArea: FC = () => {
  const [value, setValue] = useState('')

  const onSubmit = () => {
    setValue('');
    console.log('value', value);
    socket.emit('message', value)
  }

  return <div className="chatTextArea">

    <Input.TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Controlled autosize"
      autoSize={{ minRows: 3, maxRows: 5 }}
    />
    <Button
      type="primary"
      disabled={!value.length}
      onClick={onSubmit}
    > Send </Button>
  </div>
}




