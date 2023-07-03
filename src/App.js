import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Select from "./components/Select";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Container>
        <Select />
        <Input />
      </Container>
    </div>
  );
}

export default App;
