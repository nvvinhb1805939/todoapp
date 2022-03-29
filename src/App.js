import { Container } from '@mui/material';
import { createContext, useState } from 'react';
import Header from './components/Header';
import TodoFeature from './features/TodoFeature';

export const TodoContext = createContext();

function App() {
  const [todoList, setTodoList] = useState([
    {
      title: 'Todo',
      value: [
        { id: '1', title: 'Eating', description: '' },
        { id: '2', title: 'Coding', description: '' },
      ],
    },
    {
      title: 'In progress',
      value: [
        { id: '3', title: 'Sleepping', description: '' },
        { id: '4', title: 'Hacking', description: '' },
      ],
    },
    {
      title: 'Completed',
      value: [
        { id: '5', title: 'Working', description: '' },
        { id: '6', title: 'Learning', description: 'Learn ReactJS\nLearn Redux' },
      ],
    },
  ]);
  const [filterTodoList, setFilterTodoList] = useState([]);

  const handleSearchChange = value => {
    const data = value.toLowerCase();
    const newTodoList = [...todoList];
    const result = newTodoList.map(todoListItem => ({
      title: todoListItem.title,
      value: todoListItem.value.filter(
        todoItem => todoItem.title.toLowerCase().includes(data) || todoItem.description.toLowerCase().includes(data)
      ),
    }));
    setFilterTodoList(result);
  };

  return (
    <TodoContext.Provider value={{ todoList, setTodoList, filterTodoList }}>
      <div className='App'>
        <Header onSearch={handleSearchChange} />
        <Container maxWidth='lg'>
          <TodoFeature />
        </Container>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
