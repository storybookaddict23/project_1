import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Online Quiz</h1>

      <button onClick={() => navigate("/quiz")}>
        Start Quiz
      </button>
    </div>
  );
}

export default Start;