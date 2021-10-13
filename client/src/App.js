import { useState, useEffect } from 'react';

import { GlobalContext } from './Context';

import { loadAllTasks } from './api';

import { NewTask } from './components/NewTask';
import { ToDoList } from './components/ToDoList';
import { Completed } from './components/Completed';

import styled from '@emotion/styled';

export const App = () => {

  const [tasks, setTasks] = useState({});
  const [refresh, setRefresh] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    document.title = 'Inventora Tasks';
    const abortController = new AbortController();
    loadAllTasks(abortController.signal)
      .then(setTasks)
      .then(() => setLoading(false))
      .catch(console.log);
    return () => {
      document.title = '';
      abortController.abort();
    }
  }, [refresh]);

  if (loading) {
    return (
      <Loading>
        <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt={"Loading"} />
      </Loading>
    );
  }

  return (
    <GlobalContext.Provider value={{ tasks, setLoading, setRefresh }}>
      <Header>
        <Title>Inventora Tasks</Title>
      </Header>
      <Main>
        <NewTask />
        <ToDoList />
        <Completed />
      </Main>
    </GlobalContext.Provider>
  )
}

const Loading = styled.div({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  animation: 'genericFadeIn ease-in-out 0.5s',
  webkitAnimation: 'genericFadeIn ease-in-out 0.5s',
  mozAnimation: 'genericFadeIn ease-in-out 0.5s',
  oAnimation: 'genericFadeIn ease-in-out 0.5s',
  msAnimation: 'genericFadeIn ease-in-out 0.5s'
});

const Header = styled.header({
  alignItems: 'center',
  borderBottom: '1px solid gray',
  display: 'flex',
  height: '4rem',
  padding: '0 0 0 2rem',
  position: 'fixed',
  top: 0,
  width: '100%'
});

const Main = styled.main({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '500px',
  minWidth: '300px',
  padding: '5rem 1rem 1rem 1rem',
  width: '100%'
});

const Title = styled.h1({
  fontSize: '1.5rem',
  fontWeight: 700
});