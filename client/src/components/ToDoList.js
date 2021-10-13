import { useContext } from 'react';

import { GlobalContext } from "../Context";

import { updateTaskToCompleted } from '../api';

import styled from '@emotion/styled';

export const ToDoList = () => {

  const { tasks, setRefresh } = useContext(GlobalContext);

  const { active = [] } = tasks;

  return (
    <TaskGroup>
      <GroupTitle>To-Do</GroupTitle>
      {active.map((task, index) => (
        <ListItem key={task.id}>
          <Input
            id={task.id}
            name={task.id}
            type={'checkbox'}
            onChange={() => {
              updateTaskToCompleted(task.id)
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