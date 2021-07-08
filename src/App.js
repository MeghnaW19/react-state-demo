import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
   return (
    <div className="App">
      <h1>Hello! I am the Root Component</h1>
      <ParentComponent></ParentComponent>


    </div>
  );
}

export default App;
