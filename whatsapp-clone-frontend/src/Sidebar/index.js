import React from 'react'
import { IconButton, Avatar } from '@material-ui/core';
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import { SidebarContainer, SidebarHeader, SidebarIcons, SearchBarContainer, SearchBarWrapper, SearchInput, NewChatContainer } from './style';
import SidebarChat from './SidebarChat';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Avatar src="https://avatars.githubusercontent.com/burak-selvi" />
        <SidebarIcons>
          <IconButton>
            <DonutLarge style={styles.headerIcons} />
          </IconButton>
          <IconButton>
            <Chat style={styles.headerIcons} />
          </IconButton>
          <IconButton>
            <MoreVert style={styles.headerIcons} />
          </IconButton>
        </SidebarIcons>
      </SidebarHeader>
      <SearchBarContainer>
        <SearchBarWrapper>
          <SearchOutlined style={styles.searchIcon} />
          <SearchInput type="text" placeholder="Search or start now" />
        </SearchBarWrapper>
      </SearchBarContainer>
      <NewChatContainer>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </NewChatContainer>
    </SidebarContainer>
  )
}

const styles = {
  headerIcons: {
    marginRight: '2vw'
  },
  searchIcon: {
    color: 'gray',
    padding: '10px'
  }
}