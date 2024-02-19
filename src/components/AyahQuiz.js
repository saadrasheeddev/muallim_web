import React, { useState } from "react";
// import { useSelector } from "react-redux";

function AyahQuiz({ correctTranslation, isHifzQuiz, actual_urdu_translation, correctAnswer, actual_ayah, shuffledAnswers, onSubmitForm }) {

  // State to manage selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Handler for radio button selection
  const handleRadioChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <form onSubmit={(event) => onSubmitForm(event, actual_ayah, selectedAnswer, correctAnswer, correctTranslation)} className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
  <div className="mb-8 text-xl arabic_ayat">{actual_ayah}</div>
  {isHifzQuiz ? <div className="mb-8 text-xl">{actual_urdu_translation}</div> : ""}
  <div className="mb-8">{isHifzQuiz ? "Select Next Ayah:" : "Select Correct Translation"}</div>
  {shuffledAnswers.map((answer, index) => (
    <div key={index} className="mb-6 text-base">
      <input
        type="radio"
        name="answer"
        value={isHifzQuiz ? answer[0] : answer[1]}
        id={`option${index}`}
        checked={isHifzQuiz ? selectedAnswer === answer[0] : selectedAnswer === answer[1]}
        onChange={handleRadioChange}
        className={isHifzQuiz ? "mr-2 text-xl font-arabic" : "mr-2 text-xl"}
      />
      <label htmlFor={`option${index}`} className={isHifzQuiz ? "select-none cursor-pointer text-lg arabic_ayat" : "select-none cursor-pointer text-lg"}>{isHifzQuiz ? answer[0] : answer[1]}</label>
    </div>
  ))}
  <button type="submit" className="items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Submit</button>
</form>


  );
}

export default AyahQuiz;
