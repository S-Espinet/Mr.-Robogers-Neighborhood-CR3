function beepBoop(number) {
  number = parseInt(number);
  if (isNaN(number) === false) {
    if (number === 0) {
      return 0;
    } else {
      return "Please enter a valid number.";
    }
  }else {
    return "Please enter a valid number.";
  }
}