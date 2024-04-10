import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/Pages/MainPage';
import ContextProvider from './Components/Pages/Context/ContextProvider';
function App() {
  return (
    <div className="App">
  <ContextProvider>
    <MainPage/>
  </ContextProvider>
    </div>
  );
}

export default App;
