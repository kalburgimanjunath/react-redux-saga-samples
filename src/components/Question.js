export default function Question(question) {
  return (
    <div className="max-h-fit overflow-h overflow-y shadow-lg border-2">
      <h3 className="font-bold text-pink-300">Question:</h3>
      <div>{question.question.title}</div>
    </div>
  );
}
