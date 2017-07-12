/* draft for hot || cold as in https://thinkful-ed.github.io/hot-or-cold-demo/# */

// generate random number (the number)
export const GENERATE_THE_NUMBER = 'GENERATE_THE_NUMBER';
export const generateTheNumber = () => ({
    type: GENERATE_THE_NUMBER
});

// submit user guess
export const SUBMIT_USER_GUESS = 'SUBMIT_USER_GUESS';
export const submitUserGuess = guess => ({
    type: SUBMIT_USER_GUESS,
    guess
});

// compare guess with the_number

// give feedback to user (correct, hot, warm, cold...)

// display previous guesses

// start new game (after correct or in the middle of guessing)

