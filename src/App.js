import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/FAQHeaderComponent";
import image from "./image.png";
import Accordion from "./components/Accordion";
import Body from "./components/FAQBodyComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

export default App;
