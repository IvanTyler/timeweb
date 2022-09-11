import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Container } from './Components/Container/Container';
import { Heading } from './Components/Heading/Heading';
import { Labels } from './Components/Labels/Labels';
import { Comments } from './Components/Comments/Comments';
import { useGetData } from './Hooks/useGetData';
import { Info } from './Components/Info/info';
import {
  BrowserRouter,
} from "react-router-dom";
import { useError } from './Hooks/useError';

function App() {
  const { comments } = useGetData()
  const { error } = useError()
  return (
    <>
      {!error ?
        <Container>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
          <Heading />
          <Info />
          <Labels />
          <Comments item={comments[0]} />
        </Container>
        : <p>{error}</p>
      }
    </>
  )
}

export default App;
