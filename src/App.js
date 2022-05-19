import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Header />
      <Coins />
      <CoinCarousel />
      <Download />
      <Footer /> */}
    </div>
  );
}

export default App;
