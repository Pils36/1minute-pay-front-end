import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import PasswordReset from "./pages/password-reset";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password-reset" element={<PasswordReset />} />
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
