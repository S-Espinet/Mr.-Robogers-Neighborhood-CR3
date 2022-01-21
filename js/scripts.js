function beepBoop(number) {
  number = parseInt(number);
  if (isNaN(number) === false) {
    let roboger = [];
    for(let index = 0; index <= number; index ++) {
      roboger.push(index.toString());
    }
    let robogerString = roboger.toString();
    return robogerString;
    if (robogerString.includes("1") {
        
    })
  }else {
    return "Please enter a valid number.";
  }
}

//Javascript method to search string - includes