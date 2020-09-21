import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`;

export const SidebarIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 35px;
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 10px;
  outline-width: 0;
`;

export const NewChatContainer = styled.div`
  flex: 1;
  background-color: #fff;
  overflow: auto;
`;