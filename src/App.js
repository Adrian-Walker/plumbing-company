import { Link, Switch, Route } from 'react-router-dom';
import './style.css';

function App() {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="./about"></Link>
      <Link to="./services"></Link>
    </div>
  );
}

export default App;
