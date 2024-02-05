export default function QuestionDetail(question) {
  return (
    <div className="max-h-fit min-h-3 overflow-h overflow-y shadow-lg border-2">
      <h3 className="font-bold text-pink-300">About Question:</h3>
      {question.question.details}
    </div>
  );
}
