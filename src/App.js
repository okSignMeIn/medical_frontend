import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Views/Home/HomePage';
import SummaryPage from './Views/Summary/SummaryPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/authorize"
          element={<HomePage />}
        />
        <Route
          path="/summary"
          element={<SummaryPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
