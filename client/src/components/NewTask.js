import { useContext, useState } from 'react';

import { GlobalContext} from "../Context";

import { createNewTask } from '../api';

import styled from '@emotion/styled';

export const NewTask = () => {

  const { setRefresh } = useContext(GlobalContext);

  const [formData, setFormData] = useState({});

  const handleFormDataChange = event => setFormData({ description: event.target.value });

  return (
    <TaskGroup>
      <GroupTitle>Add New Task</GroupTitle>
      <InputGroup>
        <Input
          name={'description'}
          placeholder={'Enter task description...'}
          autoComplete={'off'}
          onChange={handleFormDataChange}
        />
        <Button
          onClick={() => {
            createNewTask(formData)
              .then(setRefresh)
              .catch(console.log);
          }
        }>
          + Add Task
        </Button>
      </InputGroup>
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
  fontSize: '1rem',
  fontWeight: 700,
  padding: '0.5rem 0'
});

const InputGroup = styled.div({
  display: 'flex',
  width: '100%'
});

const Input = styled.input({
  backgroundColor: 'rgba(240, 240, 240, 1.0)',
  border: 'none',
  borderRadius: '8px',
  fontFamily: 'inherit',
  fontWeight: 500,
  marginRight: '0.5rem',
  outline: 'none',
  padding: '0.5rem',
  width: '100%'
});

const Button = styled.button({
  backgroundColor: 'rgba(56, 115, 134, 1.0)',
  border: 'none',
  borderRadius: '8px',
  color: 'rgba(255, 255, 255, 1.0)',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: 700,
  transition: 'background-color 0.2s',
  width: '120px',
  '&:hover': {
    backgroundColor: 'rgba(56, 115, 134, 0.8)'
  },
  '&:active': {
    backgroundColor: 'rgba(56, 115, 134, 0.9)'
  }
});