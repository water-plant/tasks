import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((value: Question): boolean => value.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter((value: Question): boolean => {
        return (
            value.body !== "" ||
            value.expected !== "" ||
            value.options.length !== 0
        );
    });
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const a: Question | undefined = questions.find(
        (question: Question): boolean => question.id === id
    );
    return a === undefined ? null : a;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((value: Question): boolean => value.id !== id);
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((value: Question): string => value.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (total: number, value: Question): number => total + value.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    return questions.reduce(
        (total: number, value: Question): number =>
            value.published ? total + value.points : total,
        0
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const makeStringList = (a: Question): string =>
        `${a.id},${a.name},${a.options.length},${a.points},${a.published}`;
    return (
        "id,name,options,points,published\n" +
        questions.map(makeStringList).join("\n")
    );
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const temp: Answer[] = questions.map((value: Question): Answer => {
        return {
            questionId: value.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
    return temp;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((value: Question): Question => {
        return {
            ...value,
            options: [...value.options],
            published: true
        };
    });
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const a: boolean = questions.some(
        (value: Question): boolean => value.type === "short_answer_question"
    );
    const b: boolean = questions.some(
        (value: Question): boolean => value.type === "multiple_choice_question"
    );
    return !(a && b);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const a: Question = makeBlankQuestion(id, name, type);
    return [...questions, a];
}

/***
 * Consumes an array of Questions and produces a new array of Quexxstions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map(
        (value: Question): Question =>
            value.id === targetId
                ? { ...value, name: newName, options: [...value.options] }
                : { ...value, options: [...value.options] }
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map(
        (value: Question): Question =>
            value.id === targetId
                ? {
                      ...value,
                      type: newQuestionType,
                      options:
                          newQuestionType === "multiple_choice_question"
                              ? [...value.options]
                              : []
                  }
                : { ...value, options: [...value.options] }
    );
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

function editOptionHelper(
    options: string[],
    targetOptionIndex: number,
    newOption: string
): string[] {
    if (targetOptionIndex === -1) {
        return [...options, newOption];
    }
    const a: string[] = [...options];
    a.splice(targetOptionIndex, 1, newOption);
    return a;
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuestion: Question[] = questions.map(
        (value: Question): Question => ({
            ...value,
            options: [...value.options]
        })
    );

    const index: number = questions.findIndex(
        (value: Question): boolean => value.id === targetId
    );

    newQuestion[index].options = editOptionHelper(
        newQuestion[index].options,
        targetOptionIndex,
        newOption
    );

    return newQuestion;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const index: number = questions.findIndex(
        (value: Question): boolean => value.id === targetId
    );
    const a: Question = duplicateQuestion(newId, {
        ...questions[index],
        options: questions[index].options
    });

    const b: Question[] = questions.map(
        (value: Question): Question => ({
            ...value,
            options: [...value.options]
        })
    );

    b.splice(index + 1, 0, a);
    return b;
}
