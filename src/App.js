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
        { id: '1', title: 'title1', description: '' },
        { id: '2', title: 'title2', description: '' },
      ],
    },
    {
      title: 'In progress',
      value: [
        { id: '3', title: 'title3', description: '' },
        { id: '4', title: 'title4', description: '' },
      ],
    },
    {
      title: 'Completed',
      value: [
        { id: '5', title: 'title5', description: '' },
        { id: '6', title: 'title6', description: '' },
      ],
    },
  ]);
  const [filterTodoList, setFilterTodoList] = useState([]);

  const handleSearchChange = data => {
    const newTodoList = [...todoList];
    const result = newTodoList.map(todoListItem => ({
      title: todoListItem.title,
      value: todoListItem.value.filter(
        todoItem => todoItem.title.includes(data) || todoItem.description.includes(data)
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
