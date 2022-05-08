import { Widget } from "./components/Widget";

export function App() {
  return (
    <div
      className={`
        w-full
        h-screen
    `}
      style={{
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Widget />
    </div>
  );
}
