import { useState } from "react";
import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "./Loading";
import { ScreenshotButtonProps } from "../types/ScreenshotButtonProps";

export function ScreenshotButton({ onScreenshotTook }: ScreenshotButtonProps) {
  const [isTalkingScreenshot, setIsTalkingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTalkingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);
    setIsTalkingScreenshot(false);
  }

  return (
    <button
      className={`
      p-2
      bg-zinc-800
      rounded-md
      border-transparent
      hover:bg-zinc-700
      transition-colors
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-offset-zinc-900
      focus:ring-brand-500
  `}
      type="button"
      onClick={handleTakeScreenshot}
    >
      {isTalkingScreenshot ? (
        <Loading />
      ) : (
        <Camera
          className={`
            w-6
            h-6
        `}
        />
      )}
    </button>
  );
}
