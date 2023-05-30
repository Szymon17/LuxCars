import "./App.sass";
import Home from "../src/routes/Home/Home.component";
import Navigation from "./components/Navigation/Navigation.component";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
