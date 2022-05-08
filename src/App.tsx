import { Widget } from "./components/Widget";

export function App() {
  return (
    <div
      className={`
        w-full
        h-screen
    `}
      style={{
        backgroundImage: "url('/img/bg_image.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Widget />
    </div>
  );
}
