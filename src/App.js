import './App.scss';
import CoinCarousel from './components/CoinCarousel';
import Coins from './components/Coins';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Coins />
      <CoinCarousel />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
