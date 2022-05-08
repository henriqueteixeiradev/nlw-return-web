import { FeedbackType } from "./FeedbackType";

export interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}
