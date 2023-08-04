import { Show, createSignal } from "solid-js";
import { ComponentProperties } from "../App";

export const UsbBridge = () => {
  const baseStyles = {
    Position: "absolute",
    left: "37%",
    top: "40%",
    height: "21px",
    width: "25px",
    "border-radius": "2px",
    outline: "2px solid white",
    filter: "drop-shadow(0px 1px 3px black)",
    color: "rgba(0, 0, 0, 0)",
  };

  const hoverStyles = {
    outline: "3px solid white",
    color: "rgba(20, 20, 20, .9)",
  };

  const props = ComponentProperties("ATMEGA16U2", "Used to create a bridge between the port of the main processor and USB port", "U3");

  const [isHovered, setIsHovered] = createSignal(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      class="usb-bridge-container"
      style={
        isHovered() ? { ...baseStyles, ...hoverStyles } : { ...baseStyles }
      }
      onmouseover={handleMouseEnter}
      onmouseout={handleMouseLeave}
    >
      <Show when={isHovered()} fallback={<div></div>}>
        {props.name}
      </Show>
    </div>
  );
};
