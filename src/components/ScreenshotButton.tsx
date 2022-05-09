import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { Loading } from "./Loading";
import { ScreenshotButtonProps } from "../types/ScreenshotButtonProps";

export function ScreenshotButton({
  onScreenshotTook,
  screenshotImage,
}: ScreenshotButtonProps) {
  const [isTalkingScreenshot, setIsTalkingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTalkingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);
    setIsTalkingScreenshot(false);
  }

  if (screenshotImage) {
    return (
      <button
        className={`
          p-1
          w-10
          h-10
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
          flex
          justify-end
          items-end
      `}
        style={{
          backgroundImage: `url(${screenshotImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        type="button"
        onClick={() => onScreenshotTook(null)}
      >
        <Trash
          className={`
            fill-zinc-300
        `}
          weight="fill"
        />
      </button>
    );
  }

  return (
    <button
      className={`
      p-2
      // bg-zinc-300
      // dark:bg-zinc-800
      rounded-md
      border-transparent
      dark:hover:bg-zinc-700
      hover:bg-zinc-400
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
