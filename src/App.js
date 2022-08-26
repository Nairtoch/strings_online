import './App.scss';
import { AppRouter } from './Components/App/Router/Router';
import { Home } from './Components/Pages/Home';
import { Login } from './Components/Pages/Login';
import { Footer } from './Components/Partials/Footer';
import { Header } from './Components/Partials/Header';
import { Nav } from './Components/Partials/Navigation';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Home />
      <Login />
      {/* <Footer /> */}
    </>
  );
}

export default App;
