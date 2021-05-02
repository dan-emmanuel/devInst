function actionButt(elm) {
  let currentAction = elm.className;
  switch (currentAction) {
    case "number":
      addNumber(elm.value);
      break;
    case "operander":
      operander(elm.value);

      break;
    case "mainComl":
      reset(elm.value);
    break;
    case "mainComr":
      clear(elm.value);

      break;
    default:
      break;
  }
}
let formerCurrentVal = "", 
currentVal = "0", 
backUpCurrentVal = "0", 
masterOperators = ["*", "/"], 
allOpRegex = [/.+\+/,/.+-/,/.+\*/,/.+\//],
allOps = ["+","*","/","."]
function matchInArray(string) {

  var len = allOpRegex.length,
      i = 0;

  for (; i < len; i++) {
      if (string.match(allOpRegex[i])) {
          return true;
      }
  }

  return false;

};
function addNumber(val) {
  if(val!="."||currentVal[currentVal.length-1]!="."){
  currentVal = currentVal == 0 ? val : currentVal + val;}

  updateShownVal();
}
function operander(val) {
  if (val == "=" ) {
    if(matchInArray(currentVal)){
      function evaluator() {
        if ((num1 != undefined, num2 != undefined)) {
          switch (operander) {
            case "+":
              num1 = parseFloat(num2) + parseFloat(num1);
            break;
            case "-":
              num1 = parseFloat(num2) + parseFloat(-num1);

            break;
            case "*":
              num1 = parseFloat(num2) * parseFloat(num1);

            break;
            case "/":
              num1 = parseFloat(num2) / parseFloat(num1);

            break;

            default:
              break;
          }
        }
        num2 = "";
        operander = undefined;
      }
      let num1 = "",
        num2 = "",
        operander;
      for (let index = currentVal.length - 1; index >= 0; index -= 1) {
        let elem = currentVal[index];
        if(index==0&&elem=="-" ){
          num2=-num2
        }else{
          if (isNaN(parseInt(elem))&&elem!=".") {
            if (operander != undefined) {
              console.log(operander)
              console.log(elem)
  
              if(operander!="-"&&elem!="+"){
                evaluator();
  
              }else{
                num1 = -num1
              }
  
            }
            operander = elem;
          } else {
            if (num1 != "") {
              num2 = elem+num2;
            } else {
              num1 = elem+num1;
            }
          }
        }

       

      }
      evaluator();
      formerCurrentVal = currentVal
      currentVal = backUpCurrentVal =num1;
      updateShownVal();
    }
    
    return true;
  }
  if (currentVal != "0") {
    if(!allOps.includes(currentVal[currentVal.length-1])){
      currentVal = currentVal == 0 ? val : currentVal + val;
    }
 
  }
  if(val=="-"){
    console.log(currentVal)
    console.log(val)

    if(currentVal == "0"){
      currentVal="-"
    }
    if(currentVal[currentVal.length-1]!="-"){
      currentVal = currentVal + val
    }
  }
  updateShownVal();
}
function reset(val) {
  formerCurrentVal = ""
  currentVal = "0", 
  updateShownVal()
}
function clear(val) {
  document.querySelector(".reader").value = backUpCurrentVal;
}

function updateShownVal() {
  document.querySelector(".reader").value = currentVal;
  document.querySelector("#formerCalc").textContent = formerCurrentVal
}

updateShownVal();
