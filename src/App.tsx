import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Container } from './Components/Container/Container';
import { Heading } from './Components/Heading/Heading';
import { Info } from './Components/Info/info';
import { Labels } from './Components/Labels/Labels';
import { Comments } from './Components/Comments/Comments';
import { useGetData } from './hooks/useGetData';
import {
  BrowserRouter,
} from "react-router-dom";
import { useTypeSelector } from './hooks/useTypeSelector';

function App() {
  const { comments } = useGetData()
  const state = useTypeSelector(state => state.data.data)
  return (
    <>
      {state ? <Container>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <Heading />
        <Info />
        <Labels />
        <Comments item={comments[0]} />
      </Container>
        : <p>{state}</p>}
    </>
  )
}

export default App;
