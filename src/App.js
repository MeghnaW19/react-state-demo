import "./App.css";
import ParentComponent from "./components/ParentComponent";

function App() {
  // const message = "Message from App component to Parent Component";

  return (
    <div className="App">
      <h1>Hello! I am the Root Component</h1>
      <ParentComponent></ParentComponent>
      {/* <ParentComponent message={message}></ParentComponent> */}

    </div>
  );
}

export default App;
