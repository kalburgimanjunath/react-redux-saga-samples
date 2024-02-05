export default function QuestionDetail(question) {
  return (
    <div className="max-h-fit overflow-h overflow-y shadow-lg border-2">
      {question.question.details}
    </div>
  );
}
