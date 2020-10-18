import React, {useState} from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import { ChatContainer, ChatHeader, ChatHeaderInfo, ChatHeaderTitle, ChatHeaderText, ChatHeaderIcons, ChatBody, ChatMessage, ChatMessageName, ChatMessageTime, ChatFooter, SendMessageForm, SendMessageInput, SendMessageButton } from './style';
import axios from '../axios';

export default function Chat({messages}) {
  const [input, setInput] = useState('');
  const handleSendMessage = async(event) => {
    event.preventDefault();
    await axios.post('/messages/new', {
      name: 'Burak',
      message: input,
      timestamp: 'Just now',
      received: true
    });
    setInput('');
  }

  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar />
        <ChatHeaderInfo>
          <ChatHeaderTitle>
            Room Name
          </ChatHeaderTitle>
          <ChatHeaderText>
            Last seen at
          </ChatHeaderText>
        </ChatHeaderInfo>
        <ChatHeaderIcons>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </ChatHeaderIcons>
      </ChatHeader>
      <ChatBody>
        {messages.map(message => {
          return (
            <ChatMessage receiver={message.received}>
          <ChatMessageName>
            {message.name}
        </ChatMessageName>
        {message.message}
        <ChatMessageTime>
            {message.timestamp}
          </ChatMessageTime>
        </ChatMessage>
          )
        })}
      </ChatBody>
      <ChatFooter>
        <InsertEmoticon style={{ padding: '10px', color: 'gray' }} />
        <SendMessageForm onSubmit={handleSendMessage}>
          <SendMessageInput value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type a message" />
          <SendMessageButton type="submit">
            Send a message
        </SendMessageButton>
        </SendMessageForm>
      </ChatFooter>
    </ChatContainer>
  )
}
