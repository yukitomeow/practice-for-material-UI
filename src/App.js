import "./App.css";
import { Button, Container } from "@material-ui/core";
import Hook from "./style";

function App() {
  const classes = Hook();
  console.log(classes);

  return (
    <div className="App">
      <Button className={classes.test}>Styled with Hook API</Button>
    </div>
  );
}

export default App;
