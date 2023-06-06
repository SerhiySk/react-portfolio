import { useState } from 'react';
import { Navbar, Footer, Sidebar } from './components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import './index2.css';

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <Router>
      <Navbar setIsSidebar={setIsSidebar} />
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
