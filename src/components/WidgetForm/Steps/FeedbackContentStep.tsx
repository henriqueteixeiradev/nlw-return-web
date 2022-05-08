import { CloseButton } from "../../CloseButton";
import { FeedbackContentStepProps } from "../../../types/FeedbackContentStepProps";
import { feedbackTypes } from "../../../mock/feedbackTypes";
import { ArrowLeft } from "phosphor-react";

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

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

      <div
        className={`
  flex
  py-8
  gap-2
  w-full
`}
      ></div>
    </>
  );
}
