function addPatient() {
    var xmlhttp = new XMLHttpRequest();

    const firstName = document.getElementById('patient-first-name').value;
    const lastName = document.getElementById('patient-last-name').value;
    xmlhttp.open(
        'POST',
        '../../Backend/Controllers/AddControllers/addPatient.php'
    );
    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            document.getElementById(
                'add-patient-res'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.send('firstName=' + firstName + '&lastName=' + lastName);
}

function addAppointment() {
    xmlhttp = new XMLHttpRequest();
    const patientId = document.getElementById('select-patients').value;
    const dentistId = document.getElementById('select-dentists').value;
    const clinicId = document.getElementById('select-clinics').value;
    const date = document.getElementById('appoitment-date').value;
    const e = document.getElementById('appointment-time');
    const time = e.options[e.selectedIndex].value

    

    xmlhttp.open(
        'POST',
        '../../Backend/Controllers/AddControllers/addAppointment.php'
    );
    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            document.getElementById(
                'add-appointment-res'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.send(
        'patientId=' +
            patientId +
            '&date=' +
            date +
            '&time=' +
            time +
            '&dentistId=' +
            dentistId +
            '&clinicId=' +
            clinicId
    );
}