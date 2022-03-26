import './App.css';
import Header from './component/Header/Header';
import Questions from './component/Questions/Questions';
import Showroom from './component/Showroom/Showroom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Showroom></Showroom>
      <Questions></Questions>
    </div>
  );
}

export default App;
