export default function Question(question) {
  return (
    <div className="max-h-fit overflow-h overflow-y shadow-lg border-2">
      Question:{question.question.title}
    </div>
  );
}
