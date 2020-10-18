import React, {useState, useEffect} from 'react';
import { AppWrapper, AppBody } from './style';
import Sidebar from './../Sidebar';
import Chat from './../Chat';
import Pusher from "pusher-js";
import axios from '../axios';

export default function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  useEffect(()=>{
    const pusher = new Pusher('d4a7f3fcccad6d470e6c', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  return (
    <AppWrapper>
      <AppBody>
        <Sidebar />
        <Chat messages={messages} />
      </AppBody>
    </AppWrapper>
  )
}
