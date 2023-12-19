import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <MyNavBar />
        <div className='w-100'>
        <Welcome />
        </div>
      </header>
        <AllTheBooks />
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
