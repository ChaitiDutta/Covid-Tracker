// import logo from './logo.svg';
import './App.css';
import Tracker from './Components/Tracker';
import Info from './Components/Info';
import Card from './Components/Card';
import Footer from './Components/Footer';
// import CartList from './Components/CartList';

function App() {
  return (
    <div >
      {/* <body className='light-theme'> */}

      <Info />
      <Card />
      <Tracker />
      {/* <CartList /> */}
      <Footer />
      {/* </body> */}
    </div>
  );
}

export default App;
