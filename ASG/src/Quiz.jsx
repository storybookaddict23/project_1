import { useState } from "react";
import Question from "./Question";
import { questions } from "../data/questions";

function Quiz() {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Question
        question={questions[current]}
      />

      <button
        onClick={() => setCurrent(current + 1)}
        disabled={current === questions.length - 1}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;