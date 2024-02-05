export default function Answer(question) {
  return (
    <div className="max-h-fit overflow-h overflow-y shadow-lg border-2">
      {question.question.answer}
    </div>
  );
}
