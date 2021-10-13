import { useContext } from 'react';

import { GlobalContext } from "../Context";

import { updateTaskToIncomplete } from '../api';

import styled from '@emotion/styled';

export const Completed = () => {

  const { tasks, setRefresh } = useContext(GlobalContext);

  const { completed = [] } = tasks;

  return (
    <TaskGroup>
      <GroupTitle>Completed</GroupTitle>
      {completed.map((task, index) => (
        <ListItem key={task.id}>
          <Input
            id={task.id}
            name={task.id}
            type={'checkbox'}
            checked={task.completed}
            onChange={() => {
              updateTaskToIncomplete(task.id)
                .then(() => setRefresh(prev => !prev))
                .catch(console.log);
            }}
          />
          <Label for={task.id}>{ task.description }</Label>
        </ListItem>
      ))}
    </TaskGroup>
  )
}

const TaskGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1.25rem',
  width: '100%'
});

const GroupTitle = styled.h2({
  borderBottom: '1px solid gray',
  fontSize: '1rem',
  fontWeight: 700,
  padding: '0.5rem 0'
});

const ListItem = styled.div({
  alignItems: 'center',
  display: 'flex',
  height: '30px',
  width: '100%',
  animation: 'genericFadeIn ease-in-out 0.5s',
  webkitAnimation: 'genericFadeIn ease-in-out 0.5s',
  mozAnimation: 'genericFadeIn ease-in-out 0.5s',
  oAnimation: 'genericFadeIn ease-in-out 0.5s',
  msAnimation: 'genericFadeIn ease-in-out 0.5s'
});

const Input = styled.input({
  backgroundColor: 'rgba(240, 240, 240, 1.0)',
  border: 'none',
  borderRadius: '5px',
  fontFamily: 'inherit',
  fontWeight: 500,
  height: '100%',
  marginRight: '1rem',
  outline: 'none',
  padding: '0.5rem'
});

const Label = styled.label({
  fontSize: '0.85rem',
  fontWeight: 700
});