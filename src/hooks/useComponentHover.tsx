import { Signal, createSignal } from "solid-js";

export default function useComponentHover(signal: Signal<boolean>): [any, () => void, () => void] {
  const [isHovered, setIsHovered] = signal;

  const baseStyles = {
    Position: "absolute",
    left: "13%",
    top: "33%",
    height: "66px",
    width: "90px",
    "border-radius": "2px",
    outline: "3px solid white",
    filter: "drop-shadow(0px 1px 3px black)",
  };

  const hoverStyles = {
    outline: "5px solid white",
  };

  const styles = isHovered()
    ? { ...baseStyles, ...hoverStyles }
    : { ...baseStyles };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return [styles, handleMouseEnter, handleMouseLeave];
}
