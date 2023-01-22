import './App.css';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/signin" element = {<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
