function addTreatment() {
    let treatmentName = document.getElementById('name').value;
    let treatmentDescription = document.getElementById('description').value;
    let treatmentCost = document.getElementById('cost').value;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', '../../Backend/Controllers/AddControllers/addTreatment.php');
    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            document.getElementById(
                'add-result'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.send('treatmentName=' + treatmentName + '&treatmentDescription=' + treatmentDescription +  '&treatmentCost=' + treatmentCost);
}

