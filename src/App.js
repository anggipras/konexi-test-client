import "./App.css";
import Header from "./components/Header";
import LoginGoogle from "./components/MainComponent/LoginGoogle";
import FlowNode from "./components/MainComponent/FlowNode";
import FileExport from "./components/MainComponent/FileExport";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import MyContext from "./MyContext";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <div className="App-layout">
          <LoginGoogle />
          <FlowNode />
          <FileExport />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
