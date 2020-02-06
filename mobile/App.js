import React from 'react';
import {StatusBar, YellowBox} from 'react-native'; 

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#C20407"/>
      <Routes/>
    </>
  );
}

