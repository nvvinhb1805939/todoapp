import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Container maxWidth='lg'>
        <BrowserRouter>
          <Header />

          {/* <Routes>
            <Route path='/' element={<Navigate to='/todos' />} />
            <Route path='/todos/*' element={<Photo />} />
            <Route path='*' element={<NotFound />} />
          </Routes> */}
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
