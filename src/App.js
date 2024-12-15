import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Favorites from './pages/favorites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/react-alg-app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
