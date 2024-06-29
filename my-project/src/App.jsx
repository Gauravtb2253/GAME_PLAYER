import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TmaProvider } from './Components/tma/provider';
import { Me } from './Components/tma/me';
import HomePage from "./Components/HomePage";
import FlipGame from "./Games/FlipCard/FlipCard";
import SnakeGame from "./Games/SnakeGame/SnakeGame";
import GTH from "./Games/GuessTheColor/GTH";
import EmojiIntruderHunt from "./Games/EmojiIntruder/EmojiIntruder";
import RockPaperScissors from "./Games/RockPaper Scissors/Game";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <TmaProvider>
      <Me />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flipcard" element={<FlipGame />} />
          <Route path="/snakegame" element={<SnakeGame />} />
          <Route path="/gth" element={<GTH />} />
          <Route path="/emojiintruder" element={<EmojiIntruderHunt />} />
          <Route path="/rckpapsc" element={<RockPaperScissors />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </TmaProvider>
  );
};

export default App;
