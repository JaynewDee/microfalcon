import "./App.css";
import boardImg from "./assets/arduino-falcon.webp";
import plainImg from "./assets/arduino_board.png";
import { Usb } from "./components/Usb";
import { ColorPalette } from "./components/ColorPalette";

/////////////
// !SOLID.JS!
/////////////

function App() {
  return (
    <>
      <a
        href="https://docs.arduino.cc/static/bb5aff6eeab83ce287c62a0b1cd81633/A000066-datasheet.pdf"
        target="_blank"
      >
        R3 Datasheet
      </a>
      <ColorPalette />
      <div class="primary-img-wrapper">
        <Usb />
        <img class="primary-img" src={boardImg}></img>
      </div>
      <img class="plain-img" src={plainImg}></img>
    </>
  );
}

export default App;
