class FizzBuzzService {
  static applyValidationInExplorer(explorer){
    if(explorer.score%3 === 0){
      explorer.trick = "FIZZ";
      return explorer;
    }else if(explorer.score%5 === 0){
      explorer.trick = 'BUZZ';
    }else if(explorer.score%3 === 0 && explorer.score%3 === 0){
      explorer.trick = 'FIZZBUZZ';
    }else{
      explorer.trick = explorer.score
    }
  }
}

module.exports = FizzBuzzService