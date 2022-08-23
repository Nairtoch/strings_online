import './App.scss';
import { AppRouter } from './Components/App/Router/Router';
import { Home } from './Components/Pages/Home';
import { Footer } from './Components/Partials/Footer';
import { Header } from './Components/Partials/Header';
import { Nav } from './Components/Partials/Navigation';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
