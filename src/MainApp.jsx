import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { AboutPage } from './components/AboutPage';

import { UserProvider } from './contexts/UserProvider';
import { Navbar } from './ui/Navbar';

export const MainApp = () => {
  return (
    <>
      <Navbar></Navbar>

      <br />

      <UserProvider>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='Login' element={<LoginPage/>} />
          <Route path='About' element={<AboutPage/>} />
        </Routes>
      </UserProvider>
    </>
  )
};