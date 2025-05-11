import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AboutPage from './pages/About';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
