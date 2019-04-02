# Trivia Game
A Trivia Game using Open Trivia DB API: `https://opentdb.com/`

# How to Play
Trivia Game has 10 questions total. Click on `Start Game` to begin the game. See your score at the end of the game!

## Known Issues
- Usage of `Array.prototype.flat()`. No Microsoft Edge/Internet Explorer support
- It's possible that you'll get the same question over and over because it's querying the API URL on every question
- Correct answers will return as incorrect because of HTML entities i.e. `Thomas & Martha`, specifically `&amp;` or `&`
