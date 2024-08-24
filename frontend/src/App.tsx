import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home';

function App() {
  const location = useLocation();

  return (
    <>
    {location.pathname !== "/" && <Home />}
    <Routes>
      <Route path='/'   element={<Home />} />
    </Routes>
    </>
  )
}

export default App
