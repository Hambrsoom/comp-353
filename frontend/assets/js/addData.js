function addPatient() {
    xmlhttp = new XMLHttpRequest();

    const firstName   = document.getElementById('patient-first-name').value;
    const lastName    = document.getElementById('patient-last-name').value;
    xmlhttp.open('POST', '../../Backend/Controllers/AddControllers/AddAppointment.php');
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


function addAppoitment(){
    xmlhttp = XMLHttpRequest();
    const patientId = document.getElementById('select-patients-container').value;
    const phoneNumber = document.getElementById('phone').value;
    const gender      = document.getElementById('gender').value;
    const dentistId     = document.getElementById('select-dentists-container').value;
    const clinicId      = document.getElementById('select-clinics-container').value;
    const date        = document.getElementById('date').value;
    const time        = document.getElementById('time').value;
    const cost        = document.getElementById('cost').value

    xmlhttp.open('POST', '../../Backend/Controllers/AddControllers/AddAppointment.php');
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
    xmlhttp.send('patientId=' + patientId +'&date='+ date +'&time=' + time  +'&dentistId='+dentistId+ '&clinicId='+clinicId + '$cost=' + cost);

}