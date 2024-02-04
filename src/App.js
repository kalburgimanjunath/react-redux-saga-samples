import Answer from "./components/Answer";
import Question from "./components/Question";
import QuestionDetail from "./components/QuestionDetail";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadQuestions } from "./data/questionSlice";
export default function App() {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadQuestions());
  }, []);
  return (
    <div className="App bg-gray-600 text-white h-full absolute w-full">
      {questions && questions.length>0 && 
        questions.map((item) => {
          return (
            <div key={item.id}>
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
    </div>
  );
}
