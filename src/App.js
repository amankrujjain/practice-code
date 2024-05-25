import Api from './Api';
import Counter from './Counter';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> This is redux practice screen.
       </h1>
       <Home/>
       <Counter/>
       <Api/>
      </header>
    </div>
  );
}

export default App;
