import { For, createSignal } from "solid-js";

export function ColorPalette() {
  const [isHovered, setIsHovered] = createSignal(false);

  const [styles, setStyles] = createSignal([
    { "background-color": "var(--ard-blue)" },
    { "background-color": "var(--ard-red)" },
    { "background-color": "var(--ard-yellow)" },
    { "background-color": "var(--ard-grey)" },
  ]);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div class="color-palette">
      <For each={styles()}>
        {(color) => (
          <span
            class="palette-sample"
            onmouseenter={handleMouseEnter}
            onmouseleave={handleMouseLeave}
            style={color}
          ></span>
        )}
      </For>
    </div>
  );
}
