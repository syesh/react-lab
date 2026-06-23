import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  const LinkStyle = ({ isActive }) => ({
    margin: '0 10px',
    color: isActive ? 'blue' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none'
  });

  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <NavLink to="/" style={LinkStyle}>Home</NavLink>
        <NavLink to="/about" style={LinkStyle}>About</NavLink>
        <NavLink to="/contact" style={LinkStyle}>Contact</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
