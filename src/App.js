import Header from './components/Header';
import HomePage from './pages';
import Footer from './components/Footer';

import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <BrowserRouter>
          <HomePage></HomePage>
        </BrowserRouter>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
