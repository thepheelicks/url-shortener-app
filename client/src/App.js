import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import ShortenForm from './components/shortenForm';
import RevertForm from './components/revertForm';

import './App.css';

function App() {
  return (
    <Container className="App">
      <div style={{ margin: 100 }}>
        <ShortenForm   />
      </div>
      <div style={{ margin: 100 }}>
        <RevertForm />
      </div>
    </Container>
  );
}

export default App;
