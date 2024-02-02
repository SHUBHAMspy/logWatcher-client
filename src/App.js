import logo from './logo.svg';
import './App.css';
import { useNavigate, useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const elements = useRoutes(routes);
  
  
  return (
    <div className="h-screen bg-slate-200">
      {elements}
    </div>
  );
}

export default App;
