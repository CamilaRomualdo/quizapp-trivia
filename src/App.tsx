import React, {useState} from 'react';
import {Answer, QuestionState} from "./types/quiz";
import {fetchOpenTriviaDatabase} from "./services/API";
import {Difficulty, Type} from "./enums/options";
import {GlobalStyles, Wrapper} from "./style/global-style";
import QuestionCardComponent from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

export default function App() {
    const [gameOver, setGameOver] = useState(true);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Answer[]>([]);

    const startGame = async () => {
        setLoading(true);
        setGameOver(false);
        const newQuestions = await fetchOpenTriviaDatabase(
            TOTAL_QUESTIONS,
            Difficulty.EASY,
            Type.MULTIPLE,
        );
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: any) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer
            if (correct) setScore((prev) => prev + 1)
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            }
            setUserAnswers((prev) => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }

    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <h1>Quiz Trivia</h1>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className='start' onClick={startGame}>
                        Start
                    </button>
                ) : null}
                {!gameOver ? <p className='score'>Score: {score}</p> : null}
                {loading ? <p>Loading Questions...</p> : null}
                {!loading && !gameOver && (
                    <QuestionCardComponent
                        answers={questions[number].answers}
                        callback={checkAnswer}
                        question={questions[number].question}
                        questionNumber={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                    />
                )}
                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                    <button className='next' onClick={nextQuestion}>
                        Next Question
                    </button>
                ) : null}
            </Wrapper>
        </>
    )
}

