import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
      </header>
      <section>
        <ol>
          <li><a href="/memo">useMemo</a></li>
          <li><a href="/context">userContext</a></li>
          <li><a href="/ref">userRef</a></li>
          <li><a href="/reducer">userReducer</a></li>
          <li><a href="/callback">callback</a></li>
          <li><a href="/custom">Custom Hooks</a></li>
        </ol>
      </section>
    </div>
  );
}

export default App;
