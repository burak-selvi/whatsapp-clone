import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import { ChatContainer, ChatHeader, ChatHeaderInfo, ChatHeaderTitle, ChatHeaderText, ChatHeaderIcons, ChatBody, ChatMessage, ChatMessageName, ChatMessageTime, ChatFooter, SendMessageForm, SendMessageInput, SendMessageButton } from './style';

export default function Chat() {
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
        <ChatMessage>
          <ChatMessageName>
            Burak
        </ChatMessageName>
        This is a message
        <ChatMessageTime>
            {new Date().toUTCString()}
          </ChatMessageTime>
        </ChatMessage>
        <ChatMessage receiver>
          <ChatMessageName>
            You
        </ChatMessageName>
        This is a second message
        <ChatMessageTime>
            {new Date().toUTCString()}
          </ChatMessageTime>
        </ChatMessage>
        <ChatMessage>
          <ChatMessageName>
            Burak
        </ChatMessageName>
        This is a third   message
        <ChatMessageTime>
            {new Date().toUTCString()}
          </ChatMessageTime>
        </ChatMessage>
      </ChatBody>
      <ChatFooter>
        <InsertEmoticon style={{ padding: '10px', color: 'gray' }} />
        <SendMessageForm>
          <SendMessageInput type="text" placeholder="Type a message" />
          <SendMessageButton type="submit">
            Send a message
        </SendMessageButton>
        </SendMessageForm>
      </ChatFooter>
    </ChatContainer>
  )
}
