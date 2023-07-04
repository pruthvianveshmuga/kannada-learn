import { useState } from "react";
import "./App.css";
import { Item, data } from "./data";

type ShowAnswerProps = {
  show: boolean;
  showAnswer: (status: boolean) => void;
};

const getRandom = (arr: Array<Item>) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const generateKannada = () => {
    const item = getRandom(data);
    setQuestion(item.kannada);
    setAnswer(item.telugu);
    setShow(false);
  };
  const generateTelugu = () => {
    const item = getRandom(data);
    setQuestion(item.telugu);
    setAnswer(item.kannada);
    setShow(false);
  };
  const showAnswer = (status: boolean) => {
    setShow(status);
  };
  console.log(data);
  const ShowAnswer = ({ show, showAnswer }: ShowAnswerProps) => {
    return (
      <button onClick={() => showAnswer(!show)}>
        {show ? "Hide" : "Show"} Answer
      </button>
    );
  };
  return (
    <div className="App">
      <button onClick={generateKannada}>Generate Kannada</button>
      <button onClick={generateTelugu}>Generate Telugu</button>
      {question && <div>{question}</div>}
      {answer && show && <div>{answer}</div>}
      {answer && <ShowAnswer show={show} showAnswer={showAnswer} />}
    </div>
  );
}

export default App;
