import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((qsns) => {
        setQuestions(qsns);
      });
  }, []);


  function handleDelete(deletedItem) {
    const deletedItems = questions.filter((question) => question.id !== deletedItem.id)

    setQuestions(deletedItems);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((questions) => (
          <QuestionItem question={questions} onDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
