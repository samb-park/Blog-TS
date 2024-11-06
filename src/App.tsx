import { RecoilRoot } from 'recoil';
import '../public/bootstrap-4.4-2.1-dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
