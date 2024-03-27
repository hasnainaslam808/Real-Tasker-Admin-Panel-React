
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './components/login/Login';
import Dashboard from './components/admin-managment/Dashboard/dashboard';
function App() {
  return (

   <>
   <BrowserRouter>
   <Routes>
    <Route path='/*' Component={Dashboard}></Route>
   </Routes>
X   </BrowserRouter>
   </>
  );
}

export default App;
