export type Answer = {
    answer: string;
    correct: boolean;
    correctAnswer: string;
    question: string;
}

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] }

