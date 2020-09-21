import React from 'react';
import { Avatar } from '@material-ui/core';
import { SidebarChatContainer, SidebarChatInfo, SidebarChatInfoTitle, SidebarChatInfoText } from './style';

export default function SidebarChat() {
  return (
    <SidebarChatContainer>
      <Avatar />
      <SidebarChatInfo>
        <SidebarChatInfoTitle>
          Dance Room
        </SidebarChatInfoTitle>
        <SidebarChatInfoText>
          This is last message
        </SidebarChatInfoText>
      </SidebarChatInfo>
    </SidebarChatContainer>
  )
}
