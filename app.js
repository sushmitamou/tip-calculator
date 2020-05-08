function calcy(){
    var bill = Number(document.getElementById('bill-total').value);
    var tipParcent = Number(document.getElementById('tipInput').value);
    var split = document.getElementById('splitInput').value;
    var tipValue = bill * (tipParcent / 100);
    var newBill = (bill + tipValue)/split;
    var perTip = (tipValue / split);


    document.getElementById('tipOutput').innerHTML = tipParcent + "%";
    document.getElementById('splitOutput').innerHTML = split + " person";
    document.getElementById('newBill').innerHTML = "$" + newBill.toFixed(2);
    document.getElementById('newTip').innerHTML = "$" + perTip.toFixed(2);
} 