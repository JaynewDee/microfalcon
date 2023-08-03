import { Show, createSignal } from "solid-js";

function ComponentProperties(description: string, docRef: string) {
  return {
    description,
    docRef
  }
}

export const Usb = () => {
  const baseStyles = {
    Position: "absolute",
    left: "13%",
    top: "33%",
    height: "66px",
    width: "90px",
    "border-radius": "2px",
    outline: "3px solid white",
    filter: "drop-shadow(0px 1px 3px black)",
    color: "rgba(20, 20, 20, 0)"
  };

  const hoverStyles = {
    outline: "5px solid white",
    color: "rgba(20, 20, 20, .9)"
  };

  const props = ComponentProperties("USB-B Connector", "X2")

  const [isHovered, setIsHovered] = createSignal(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      class="usb-container"
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
  );
};
