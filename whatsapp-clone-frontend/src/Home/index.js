import React from 'react';
import { AppWrapper, AppBody } from './style';
import Sidebar from './../Sidebar';
import Chat from './../Chat';

export default function Home() {
  return (
    <AppWrapper>
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
    </AppWrapper>
  )
}
