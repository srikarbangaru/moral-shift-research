import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage     from './pages/HomePage';
import ExplorePage  from './pages/ExplorePage';
import QuestionsPage from './pages/QuestionsPage';
import ComparePage  from './pages/ComparePage';
import FindingsPage from './pages/FindingsPage';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col" style={{ background: '#07070f' }}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"          element={<HomePage />} />
            <Route path="/explore"   element={<ExplorePage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/compare"   element={<ComparePage />} />
            <Route path="/findings"  element={<FindingsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
