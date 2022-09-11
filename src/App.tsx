import React from 'react';
import './App.scss';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { Header } from './Components/Header/Header';
import {
  BrowserRouter,
} from "react-router-dom";
import { Heading } from './Components/Heading/Heading';
import { Info } from './Components/Info/info';
import { Labels } from './Components/Labels/Labels';
import { Comments } from './Components/Comments/Comments';
import { useGetData } from './hooks/useGetData';

function App() {
  const { comments } = useGetData()
  return (
    <>
      <Wrapper>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Heading />
        <Info />
        <Labels />
        <Comments item={comments[0]}/>
      </Wrapper>
    </>
  )
}

export default App;
