import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Booklist from './pages/Booklist';
import BookDetails from './pages/BookDetails';
import Favorites from './pages/Favorites';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
