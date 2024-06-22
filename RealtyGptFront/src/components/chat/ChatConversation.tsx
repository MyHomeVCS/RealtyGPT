import { FC, useEffect, useRef } from 'react';
import { IMessage } from 'src/interfaces/message';
import { Message } from 'src/components/message';
import { TypingLoading } from 'src/components/TypingLoading';
import { ChatConnectingLoading } from 'src/components/ChatConnectingLoading';

interface IChatConversationProps {
  conversation: IMessage[];
  isConnected: boolean;
  isAiTyping: boolean;
}

export const ChatConversation: FC<IChatConversationProps> = ({ isConnected, conversation, isAiTyping }) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollAreaRef.current?.scrollTo({ top: scrollAreaRef.current?.scrollHeight });
  }, [conversation.length]);

  return (
    <div className="chatConversation scrollbar" ref={scrollAreaRef}>
      {!isConnected && <ChatConnectingLoading />}
      {conversation.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {isConnected && isAiTyping && <TypingLoading />}
    </div>
  );
};
