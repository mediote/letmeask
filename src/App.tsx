import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { AuthContextProvider } from './contexts/authContext'


function App() {
  return (
    <BrowserRouter> 
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>    
    </BrowserRouter>
  );
}

export default App;
