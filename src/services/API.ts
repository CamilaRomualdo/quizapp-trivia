import {Difficulty, Type} from "../enums/options";
import {Question} from "../types/quiz";
import {shuffleArray} from "../utils/shuffleArray";

export const fetchOpenTriviaDatabase = async (amount: number, difficulty: Difficulty, type: Type) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}
