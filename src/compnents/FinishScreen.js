import { useQuiz } from "../context/AppContext";

export default function FinishScreern() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  const percentages = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored
        <strong>
          {points} out of {maxPoints} ({Math.ceil(percentages)} %)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
