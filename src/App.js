import "./App.css";
import Header from "./components/Header";
import LoginGoogle from "./components/MainComponent/LoginGoogle";
import FlowNode from "./components/MainComponent/FlowNode";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-layout">
        <LoginGoogle />
        <FlowNode />
      </div>
    </div>
  );
}

export default App;
