import { FormEvent, useState } from "react";
import { CloseButton } from "../../CloseButton";
import { FeedbackContentStepProps } from "../../../types/FeedbackContentStepProps";
import { feedbackTypes } from "../../../mock/feedbackTypes";
import { ArrowLeft } from "phosphor-react";
import { ScreenshotButton } from "../../ScreenshotButton";

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({
      screenshot,
      comment,
    });
  }

  return (
    <>
      <header>
        <button
          className={`
            top-5
            left-5
            absolute
            text-zinc-400
            hover:text-zinc-100
        `}
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft
            className={`
              w-4
              h-4
          `}
            weight="bold"
          />
        </button>
        <span
          className={`
            text-xl
            leading-6
            flex
            items-center
            gap-2
        `}
        >
          <img
            className={`
              w-6
              h-6
          `}
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form
        className={`
          my-4
          w-full
      `}
        onSubmit={handleSubmitFeedback}
      >
        <textarea
          className={`
          min-w-[304px]
          w-full
          min-h-[112px]
          text-sm
          placeholder-zinc-400
          text-zinc-100
          border-zinc-600
          bg-transparent
          rounded-md
          focus:border-brand-500
          focus:ring-brand-500
          focus:ring-1
          focus:outline-none
          resize-none
          scrollbar
          scrollbar-thumb-zinc-700
          scrollbar-track-transparent
          scrollbar-thin
        `}
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer
          className={`
            flex
            gap-2
            mt-2
        `}
        >
          <ScreenshotButton
            screenshotImage={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            className={`
              p-2
              bg-brand-500
              rounded-md
              border-transparent
              flex-1
              flex
              justify-center
              items-center
              text-sm
              hover:bg-brand-300
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-zinc-900
              focus:ring-brand-500
              transition-colors
              disabled:opacity-50
              disabled:hover:bg-brand-500
              disabled:cursor-not-allowed
          `}
            type="submit"
            disabled={comment.length === 0}
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
