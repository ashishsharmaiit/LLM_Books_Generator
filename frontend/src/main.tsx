// Main.tsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'; // Import HomePage
import ResultsPage from './pages/ResultsPage/ResultsPage'; // Import ResultsPage
import BookViewNew from './pages/BookViewNew/BookViewNew';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/book-view" element={<BookViewNew />} /> {/* New route for BookView */}
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Main />);
