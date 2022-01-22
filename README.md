# _Mr.\_Roboger's\_Neighborhood_

#### By _**S-Espinet**_

#### _Simple Javascript webpage where users can enter a number and get a list up to and including their number, with substitutions._

## Technologies Used

* _Markdown_
* _HTML_
* _JavaScript_
* _jQuery_

## Tests

_Describe: beepBoop(0)_

_Test(1): "It should return an error if a non-number is inputted."_  
_Code: beepBoop("A");_  
_Expected Output: [Please enter a valid number.]_

_Test(2): "It should return 0 when 0 is inputted."_  
_Code: beepBoop(0);_  
_Expected Output: ["0"]_

_Test(3): "It should return an array which consists of a number of elements equal to the inputted number + 1."_  
_Code: let roboger = [];_  
_roboger = beepBoop("5");_  
_roboger.length;_  
_Expected Output: 6_

_Test(4): "It should return "Beep!", "Boop!", and "Won't you be my neighbor?" in place of "1", "2", and "3"._  
_Code: beepBoop("3")_
_Expected Output: ["0", "Beep!", "Boop", "Won't you be my neighbor?"]_

_Test(5): "It should return 'Won't you be my neighbor?' at position 32."_  
_Code: beepBoop("32")[32]_
_Expected Output: "Won't you be my neighbor?"_

_Test(6): "It should return 'Boop!' at position 21 if beepBoop is called with <= 31."_  
_Code: beepBoop("21")[21]_
_Expected Output: "Boop!"_

_Test(7): "It should return 'Won't you be my neighbor?' at position 13 if beepBoop is called with <= 20."_  
_Code: beepBoop("13")[13]_
_Expected Output: "Won't you be my neighbor?"_

## Description

_This is a webpage that allows users to enter a number, after which they get a list back. The list includes numbers up to and including the inputted number with substitutions including "Beep!", "Boop!", and "Won't you be my neightbor?"._

## GitHub Pages Link

* _https://s-espinet.github.io/Mr.-Robogers-Neighborhood-CR3/_

## Setup/Installation Requirements

* _navigate to github.com/S-Espinet in browser_
* _select repository (Mr.-Robogers-Neighborhood-CR3)_
* _click `Code` button and select desired security protocol_
* _run git clone in terminal into desired directory_
* _navigate to top level of directory in terminal -or- in your GUI_
* _type "open index.html" into your terminal, -or- double-click the index.html file in your GUI_
* _enter number into text box and click the submit button_
* _delete first number or refresh page to run again_

## Known Bugs

* _No known bugs at this time_

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _S-Espinet_