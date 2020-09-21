import styled from 'styled-components';
import bodyImage from "../assets/chat-body-bg.png";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

export const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const ChatHeaderTitle = styled.h3`
  margin-bottom: 3px;
  font-weight: 500;
`;

export const ChatHeaderText = styled.p`
  color: gray;
`;

export const ChatHeaderIcons = styled.div`

`;

export const ChatBody = styled.div`
  flex: 1;
  background-image: url(${bodyImage});
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: auto;
`;

export const ChatMessage = styled.p`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  background-color: ${props => props.receiver ? '#dcf8c6' : '#fff'} ;
  border-radius: 10px;
  margin-bottom: 30px;
  ${props => props.receiver ? 'margin-left: auto' : ''}
`;

export const ChatMessageName = styled.span`
  position: absolute;
  top: -15px;
  font-size: xx-small;
  font-weight: 800;
`;

export const ChatMessageTime = styled.span`
  margin-left: 10px;
  font-size: xx-small;
`;

export const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;
`;

export const SendMessageForm = styled.form`
  display: flex;
  flex: 1;
`;

export const SendMessageInput = styled.input`
  flex: 1;
  border-radius: 30px;
  padding: 10px;
  border: none;
  outline-width: 0;
`;

export const SendMessageButton = styled.button`
  display: none;
`;