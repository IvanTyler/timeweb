import React from 'react';
import './App.scss';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { Header } from './Components/Header/Header';
import {
  BrowserRouter,
} from "react-router-dom";
import { Heading } from './Components/Heading/Heading';

function App() {
  return (
    <>
      <Wrapper>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Heading />
      </Wrapper>
    </>
  )
}

export default App;
