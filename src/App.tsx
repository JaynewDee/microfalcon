import "./App.css";
import boardImg from "./assets/arduino-falcon.webp";
import plainImg from "./assets/arduino_board.png";
import { Usb } from "./components/Usb";
import { ColorPalette } from "./components/ColorPalette";
import { Processor } from "./components/Processor";
import { UsbBridge } from "./components/UsbBridge";

/////////////
// !SOLID.JS!
/////////////

export function ComponentProperties(name: string,description: string, docRef: string) {
  return {
    name,
    description,
    docRef,
  };
}


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
        <UsbBridge />
        <Processor />
        <img class="primary-img" src={boardImg}></img>
      </div>
      <img class="plain-img" src={plainImg}></img>
    </>
  );
}

export default App;
