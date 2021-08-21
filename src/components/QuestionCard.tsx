import React from "react";
import {Answer} from "../types/quiz";
import {ButtonWrapper, Wrapper} from "./QuestionCard.styles";

type Props = {
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    question: string
    questionNumber: number
    totalQuestions: number
    userAnswer: Answer | undefined
}

export default function QuestionCardComponent(props: Props) {
    return (
        <>
            <Wrapper>
                <p className='number'>
                    Question: {props.questionNumber} / {props.totalQuestions}
                </p>
                <p dangerouslySetInnerHTML={{ __html: props.question }} />
                <div>
                    {props.answers.map((answer) => (
                        <ButtonWrapper
                            key={answer}
                            correct={props.userAnswer?.correctAnswer === answer}
                            userClicked={props.userAnswer?.answer === answer}
                        >
                            <button disabled={!!props.userAnswer} value={answer} onClick={props.callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>
            </Wrapper>
        </>
    )
}
