import Manager from "./components/Manager";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <h1>Multi Manager App</h1>
      <Manager type="Users" />
      <Manager type="Products" />
      <Manager type="Tasks" />
    </div>
  );
}

export default App;