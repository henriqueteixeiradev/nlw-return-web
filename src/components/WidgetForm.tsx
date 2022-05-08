import { CloseButton } from "./CloseButton";

export function WidgetForm() {
  return (
    <div
      className={`
      bg-zinc-900
        p-4
        relative
        rounded-2xl
        mb-4
        flex
        flex-col
        items-center
        shadow-lg
        w-[calc(100vw-2rem)]
        md:w-auto
    `}
    >
      <header
        className={`
          text-xl
          leading-6
        `}
      >
        <span>Deixe seu Feedback</span>
        <CloseButton />
      </header>

      <p>Hello World</p>

      <footer
        className={`
          text-xs
          text-neutral-400
      `}
      >
        Feito com ♥ pela{" "}
        <a
          className={`
            underline
            underline-offset-2
        `}
          href="https:rocketseat.com.br/"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
