import React, { useState } from "react";
import { useSelector } from "react-redux";

function AyahQuiz({ correctAnswer, actual_ayah, shuffledAnswers, onSubmitForm }) {

  // State to manage selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handler for radio button selection
  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (

    <form onSubmit={(event) => onSubmitForm(event, actual_ayah, selectedAnswer, correctAnswer)} className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
  <div className="mb-8 text-xl font-arabic">{actual_ayah}</div>
  <div className="mb-8">Select Next Ayah: </div>
  {shuffledAnswers.map((answer, index) => (
    <div key={index} className="mb-6 text-base font-arabic">
      <input
        type="radio"
        name="answer"
        value={answer}
        id={`option${index}`}
        checked={selectedAnswer === answer}
        onChange={handleRadioChange}
        className="mr-2 text-xl font-arabic"
      />
      <label htmlFor={`option${index}`} className="select-none cursor-pointer">{answer}</label>
    </div>
  ))}
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Submit</button>
</form>


  );
}

export default AyahQuiz;
