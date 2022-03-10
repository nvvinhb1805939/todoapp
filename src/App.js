import { Container } from '@mui/material';
import Header from './components/Header';
import TodoFeature from './features/TodoFeature';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container maxWidth='lg'>
        <TodoFeature />
      </Container>
    </div>
  );
}

export default App;
