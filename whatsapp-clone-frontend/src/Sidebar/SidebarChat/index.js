import React, {useState, useEffect} from 'react';
import { Avatar } from '@material-ui/core';
import { SidebarChatContainer, SidebarChatInfo, SidebarChatInfoTitle, SidebarChatInfoText } from './style';

export default function SidebarChat() {
  const [seed, setSeed] = useState('');

  useEffect(()=>{
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <SidebarChatContainer>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
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
