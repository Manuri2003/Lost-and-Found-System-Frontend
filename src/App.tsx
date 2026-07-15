import './App.css';
import { ItemConsole } from './components/item/ItemConsole';
import { UserConsole } from './components/user/UserConsole';
import { RequestConsole } from './components/request/RequestConsole';
import {NotFound} from './components/NotFound';
import { HashRouter, Route, Routes } from 'react-router';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { AuthProvider } from './components/auth/AuthProvider';
import NavB from './components/NavB';
import Home from './components/home/home';

function App() {
  return (
    <>
      <HashRouter>
      <AuthProvider>
        <NavB />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/item" element={<ItemConsole />} />
          <Route path="/user" element={<UserConsole />} />
          <Route path="/request" element={<RequestConsole />} />
          <Route path="/*" element={<NotFound />} />
        </Routes >
      </AuthProvider> 
      </HashRouter >
    </>
  );
}

export default App;
