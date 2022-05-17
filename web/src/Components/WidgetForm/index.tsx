
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../Assets/bug.svg";
import ideaImageUrl from "../../Assets/idea.svg";
import thoughtImageUrl from "../../Assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
  BUG: {
  title: "Problema",
  image: {
    src: bugImageUrl,
    alt: "Bug"
  }
  },
  IDEA: {
  title: "Ideia",
  image: {
    src: ideaImageUrl,
    alt: "Ideia"
  }
  },
  OTHER: {
  title: "Outro",
  image: {
    src: thoughtImageUrl,
    alt: "Outro"
  }
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)
  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
    {feedbackSent ? (
      <FeedbackSucessStep
      onFeedbackRestartRequested={handleRestartFeedback}/>
    ) : (
      <>
      {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
    ) : (
      <FeedbackContentStep 
      feedbackType={feedbackType}
      onFeedbackRestartRequested={handleRestartFeedback}
      onFeedbackSent={()=>setFeedbackSent(true)}
      />
    )
    }
    </>
    )
  }
    <footer className="text-xs text-neutral-400">
    Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/ItaloPereiraDev">Ítalo</a>
    </footer>
    </div>
  );
}