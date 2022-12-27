
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from './Router/Router';
import PrivateRoutes from './Router/PrivateRoutes';
import PublicRoutes from './Router/PublicRoutes';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<PublicRoutes/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>} />
        </Route>
        <Route path='/' element={<PrivateRoutes/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
