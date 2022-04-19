import './App.scss';
import CoinCarousel from './components/CoinCarousel';
import Coins from './components/Coins';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';
// import MainNav from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      {/* <Header /> */}
      {/* <MainNav /> */}
      <Coins />
      <CoinCarousel />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
