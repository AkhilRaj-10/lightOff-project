import { useState } from "react";
import Lamp from "./components/LampContainer";
import NavContainer from "./components/NavContainer";
import Text from "./components/TextContainer";
import "./styles.css";
export default function App() {
  const [light, setLight] = useState(true);
  return (
    <div className="App">
      <NavContainer setLight={setLight} />
      <Lamp light={light} />
      <Text />
    </div>
  );
}
