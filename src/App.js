import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages";
import PasswordReset from "./pages/password-reset";
import EmailVerification from "./pages/email-verification";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/email-verification" element={<EmailVerification />} />
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
