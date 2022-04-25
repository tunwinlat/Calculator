function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area

    var firstValue = parseInt(document.forms["input_a"]["input_a"].value);

    var secondValue = parseInt(document.forms["input_b"]["input_b"].value);

    var result, output;

    result = eval(firstValue) + eval(secondValue);

            output = firstValue + " + " + secondValue + " = " + result;

            document.getElementById("output").value = output;

    document.mycalculator.output.value = output;
}


function mulValue(){

    var firstValue = parseInt(document.forms["input_a"]["input_a"].value);

    var secondValue = parseInt(document.forms["input_b"]["input_b"].value);

    var result, output;

    result = eval(firstValue) * eval(secondValue);

    output = firstValue + " x " + secondValue + " = " + result;

    document.getElementById('output').value = output;

    document.mycalculator.output.value = output;

    document.mycalculator.output.value = text;
}

function divValue(){

    var firstValue = parseInt(document.forms["input_a"]["input_a"].value);

    var secondValue = parseInt(document.forms["input_b"]["input_b"].value);

    var result, output;

    result = eval(firstValue) / eval(secondValue);

    output = firstValue + " / " + secondValue + " = " + result;

    document.getElementById('output').value = output;

    document.mycalculator.output.value = output;

    document.mycalculator.output.value = text;
}

function clr() {

    document.getElementById("result").value = "";

    document.forms["inputForm"]["firstValue"].value = "";

    document.forms["inputForm"]["secondValue"].value = "";

}
