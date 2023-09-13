function summation(){
    let first = +document.getElementById('firstnumber').value;
    let second = +document.getElementById('secondnumber').value;
    let summa = first + second;
    document.getElementById('result').innerHTML = summa;
}
function subtract(){
    let first = +document.getElementById('firstnumber').value;
    let second = +document.getElementById('secondnumber').value;
    let subt = first - second;
    document.getElementById('result').innerHTML = subt;
}