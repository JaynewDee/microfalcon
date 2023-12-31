import { createSignal, Show } from "solid-js";
import { ComponentProperties } from "../App";

const PROCESSOR_NAME = "ATMEGA328P"

const props = ComponentProperties(PROCESSOR_NAME, "", "JZU4")

export const Processor = () => {
  const baseStyles = {
    Position: "absolute",
    left: "48%",
    top: "56%",
    height: "50px",
    width: "215px",
    "border-radius": "2px",
    outline: "2px solid white",
    filter: "drop-shadow(0px 1px 3px black)",
    color: "rgba(0, 0, 0, 0)",
  };

  const hoverStyles = {
    outline: "3px solid white",
    color: "rgba(20, 20, 20, .9)",
  };

  const [isHovered, setIsHovered] = createSignal(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return <div class="main-processor-container"
      style={
        isHovered() ? { ...baseStyles, ...hoverStyles } : { ...baseStyles }
      }
      onmouseover={handleMouseEnter}
      onmouseout={handleMouseLeave}
    >
      <Show when={isHovered()} fallback={<div></div>}>
        {props.description}
      </Show>
    </div>

};
