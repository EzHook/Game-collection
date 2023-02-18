import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import AddGame from "./components/AddGame";
import Games from "./components/Game/Games";
import GameDetail from "./components/Game/GameDetail";
import About from "./About";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddGame />} exact />
          <Route path="/games" element={<Games />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/games/:id" element={<GameDetail />} exact />
        </Routes>
      </main>
    </>
  );
}

export default App;
