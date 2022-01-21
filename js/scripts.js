function beepBoop(number) {
  number = parseInt(number);
  if (isNaN(number) === false) {
    let roboger = [];
    for(let index = 0; index <= number; index ++) {
      if (index === 32) {
        roboger.push("Won't you be my neighbor?");
      }
      else if (number < 32 && index === 21) {
        roboger.push("Boop!");
      }
      else if (number < 21 && index === 13) {
        roboger.push("Won't you be my neighbor?");
      }
      else if (index.toString().includes("1")) {
        roboger.push("Beep!");
      }
      else if (index.toString().includes("2")) {
        roboger.push("Boop!");
      }
      else if (index.toString().includes("3")) {
        roboger.push("Won't you be my neighbor?")
      }
      else {
        roboger.push(index.toString());
      }
    }
    return roboger;
  }else {
    return "Please enter a valid number.";
  }
}

$(document).ready(function(){
  $("form#numberForm").submit(function(event){
    event.preventDefault();
    const number = $("#numberInput").val();
    const results = beepBoop(number);
    $("#results").html(results.join(", "));
  })
})