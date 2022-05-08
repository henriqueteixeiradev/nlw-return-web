import { CloseButton } from "./CloseButton";

import { feedbackTypes } from "../mock/feedbackTypes";

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

      <div
        className={`
          flex
          py-8
          gap-2
          w-full
      `}
      >
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              className={`
                bg-zinc-800
                rounded-lg
                py-5
                w-24
                flex-1
                flex
                flex-col
                items-center
                gap-2
                border-2
                border-transparent
                hover:border-brand-500
                focus:border-brand-500
                focus:outline-none
            `}
              key={key}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

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
