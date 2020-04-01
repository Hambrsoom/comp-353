function addPatient() {
    xmlhttp = new XMLHttpRequest();

    var firstName = document.getElementById('patient-first-name').value;
    var lastName = document.getElementById('patient-last-name').value;
    xmlhttp.open('POST', '../../Backend/Controllers/AddControllers/addPatient.php');
    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );
    xmlhttp.send('firstName=' + firstName + '&lastName=' + lastName);
}