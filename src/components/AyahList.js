import { useState } from "react";
import AyahQuiz from "./AyahQuiz";
import classNames from "classnames";

function AyahList({data, urdu_translation}){

    let [score, setScore] = useState(0)
    let [incorrect, setIncorrect] = useState(0)
    let [result, setResult] = useState("");
    let [lastActualAyah, setLastActualAyah] = useState("");
    let [correctNextAyah, setCorrectNextAyah] = useState("")
    let [lastAnswer, setLastAnswer] = useState("");
    let [isCorrect, setIsCorrect] = useState(null);
    let [isHifzQuiz, setHifzQuiz] = useState(true);

    const handleSubmit = (event, actualAyah, selectedAnswer, correctNextAyah, correctTranslation) => {
        event.preventDefault();

        setLastActualAyah(actualAyah);
        if(isHifzQuiz){
          setCorrectNextAyah(correctNextAyah);
        }
        else{
          setCorrectNextAyah(correctTranslation);
        }
        
        
        if ((isHifzQuiz && selectedAnswer === correctAnswer) || (!isHifzQuiz && selectedAnswer === correctTranslation)) {
            setResult("Correct");
            setScore(score + 1);
            setLastAnswer(selectedAnswer);
            setIsCorrect(true);
        } else {
            setResult("Wrong");
            setIncorrect(incorrect + 1);
            setLastAnswer(selectedAnswer);
            setIsCorrect(false);
        }
      };

      let answer_div_classes = "";

      if (isCorrect){
        answer_div_classes = classNames("mt-4 bg-green-300 text-center p-2");
      }
      else if(isCorrect === null){
        answer_div_classes = classNames("mt-4 text-center p-2");
      }
      else{
        answer_div_classes = classNames("mt-4 bg-rose-400 text-center p-2");
      }

    // Generate random indices
    let randomIndex = Math.floor(Math.random() * data.length);
    let randomIndex_2 = Math.floor(Math.random() * data.length);
    let randomIndex_3 = Math.floor(Math.random() * data.length);
    let randomIndex_4 = Math.floor(Math.random() * data.length);
    
    let randomElements;

    // Use the random indices to access elements from the array
    if(isHifzQuiz){
      randomElements = [[data[randomIndex + 1], urdu_translation[randomIndex + 1]], [data[randomIndex_2], urdu_translation[randomIndex_2]], [data[randomIndex_3], urdu_translation[randomIndex_3]], [data[randomIndex_4], urdu_translation[randomIndex_4]]]
    }
    else{
      randomElements = [[data[randomIndex], urdu_translation[randomIndex]], [data[randomIndex_2], urdu_translation[randomIndex_2]], [data[randomIndex_3], urdu_translation[randomIndex_3]], [data[randomIndex_4], urdu_translation[randomIndex_4]]]
    }
    

    // Store the correct answer
    const correctAnswer = randomElements[0][0];
    const correctTranslation = randomElements[0][1]

    const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

    // Shuffle the answers for radio options
    const shuffledAnswers = shuffleArray(randomElements);

    console.log(shuffledAnswers);
    return(

        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <div className="flex justify-center">
              <button onClick={() => setHifzQuiz(true)} className={isHifzQuiz ? "mb-4 bg-blue-500 p-3 border border-blue-800 text-white focus:outline-none active:shadow-md" : "mb-4 bg-blue-100 p-3 border border-blue-400 focus:outline-none active:bg-blue-200"}>Hifz Quiz</button>
              <button onClick={() => setHifzQuiz(false)} className={!isHifzQuiz ? "mb-4 bg-blue-500 p-3 border border-blue-800 text-white ml-4 focus:outline-none active:shadow-md" : "mb-4 bg-blue-100 p-3 border border-blue-400 ml-4 focus:outline-none active:bg-blue-200"}>Translation Quiz</button>
            </div>
            <div className="flex justify-between">
                <div className="mb-4">Score: {score}</div>
                <div className="mb-4">Incorrect: {incorrect}</div>
            </div>
            <AyahQuiz correctTranslation={correctTranslation} isHifzQuiz={isHifzQuiz} actual_urdu_translation={urdu_translation[randomIndex]} correctAnswer={correctAnswer} actual_ayah={data[randomIndex]} shuffledAnswers={shuffledAnswers} onSubmitForm={handleSubmit}/>
            <div className={answer_div_classes}>
                <div className="mb-4">{result}</div>
                <div className="mb-4 arabic_ayat">Last Question: <div className="mt-2">{lastActualAyah}</div></div>
                <div className="mb-4 arabic_ayat">Correct Answer: <div className="mt-2">{correctNextAyah}</div></div>
                <div className="mb-2 arabic_ayat">Your Answer: <div className="mt-2">{lastAnswer}</div></div>
            </div>
        </div>

    )
}

export default AyahList;