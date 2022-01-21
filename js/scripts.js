function beepBoop(number) {
  number = parseInt(number);
  if (isNaN(number) === false) {
    let roboger = [];
    for(let index = 0; index <= number; index ++) {
      roboger.push(index);
    }
    return roboger;
  }else {
    return "Please enter a valid number.";
  }
}