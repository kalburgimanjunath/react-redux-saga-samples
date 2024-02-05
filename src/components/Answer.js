export default function Answer(question) {
  return (
    <div className="max-h-fit overflow-h overflow-y shadow-lg border-2">
      <h3 className="font-bold text-pink-300">Answer:</h3>
      {question.question.answer}
    </div>
  );
}
