export interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshotImage: string | null;
}
