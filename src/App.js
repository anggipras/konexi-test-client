import "./App.css";
import Header from "./components/Header";
import LoginGoogle from "./components/MainComponent/LoginGoogle";
import FlowNode from "./components/MainComponent/FlowNode";
import FileExport from "./components/MainComponent/FileExport";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-layout">
        <LoginGoogle />
        <FlowNode />
        <FileExport />
      </div>
    </div>
  );
}

export default App;
