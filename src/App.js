import Answer from "./components/Answer";
import Question from "./components/Question";
import QuestionDetail from "./components/QuestionDetail";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loadQuestions } from "./data/questionSlice";
export default function App() {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (questions && questions.length < 1) {
      dispatch(loadQuestions());
      setCurrent(current);
    } else {
      setCurrent(current);
    }
  }, []);
  // if (questions && questions.length > 0) {
  //   setCurrent(current);
  //   setPrevious(current - 1);
  //   setNext(current + 1);
  // } else {
  //   setCurrent(current);
  // }
  return (
    <div className="App bg-gray-600 text-white h-full absolute w-full">
      {questions &&
        questions.length > 0 &&
        questions.map((item, index) => {
          return (
            <div
              key={item.id}
              data-index={index}
              style={{ display: index == current ? "block" : "none" }}
            >
              <div className="p-5">
                <QuestionDetail question={item} />
              </div>
              <div className="flex justify-between p-5">
                <Question question={item} />
                <Answer question={item} />
              </div>
            </div>
          );
        })}
      <div className="fixed bottom-0 w-full shadow-lg border-t-2 flex justify-center p-2 text-center items-center">
        <button
          className="bg-pink-300 p-2 m-2"
          style={{
            display: current > 0 ? "block" : "none",
          }}
          onClick={() => setCurrent(current - 1)}
        >
          Previous{current - 1}
        </button>
        <div>Current Page:{current}</div>
        <button
          className="bg-pink-300 p-2 m-2"
          style={{
            display: current < questions.length ? "block" : "none",
          }}
          onClick={() => setCurrent(current + 1)}
        >
          Next{current + 1}
        </button>
      </div>
    </div>
  );
}
