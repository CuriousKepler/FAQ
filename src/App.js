import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./components/Accordion";
import Panel from "./components/PanelComponent";
import Card from "./components/CardComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Accordion />
      <Panel />
    </div>
  );
}

export default App;
