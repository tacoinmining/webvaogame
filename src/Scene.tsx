import { useEffect } from "react";
import { CrtBackground } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  const targetUrl = "https://tank-l1rl.onrender.com/";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        window.location.href = targetUrl;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="shader-frame">
      <CrtBackground
        variant="nintendo"
        speed={1.00}
        motion={1.00}
        hue={0}
        saturation={1.00}
        brightness={1.00}
        opacity={1.00}
      />
      <a
        href={targetUrl}
        className="push-start-link"
        title="Push Start - Play Tank"
        aria-label="Push Start - Play Tank"
      />
    </div>
  );
}
