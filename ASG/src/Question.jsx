import Option from "./Option";

function Question({ question }) {
  return (
    <div>
      <h2>{question.question}</h2>

      {question.options.map((option, index) => (
        <Option
          key={index}
          option={option}
        />
      ))}
    </div>
  );
}

export default Question;