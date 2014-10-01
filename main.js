
var boxOne = document.getElementById('num_one');
var boxTwo = document.getElementById('num_two');
var calculateBtn = document.getElementById('calculateBtn');
var answerSpan = document.getElementById('answer');

// get the addition

calculateBtn.onclick = function () {
   var value1 =  boxOne.value;
   console.log(value1);

   var value2 =  boxTwo.value;

   console.log(value2);

   var solution = Number(value1) + Number(value2);
   console.log(solution);

  answerSpan.innerHTML = String(solution);

}
