import './App.scss';
import Coins from './components/Coins';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Coins />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
