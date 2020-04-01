//get dentists names
xmlhttpdentists = new XMLHttpRequest();
xmlhttpdentists.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(
            'select-dentists-container'
        ).innerHTML = this.responseText;
    }
};
xmlhttpdentists.open('GET', '../Controllers/selectDentists.php', true);
xmlhttpdentists.send();


//get patient names
xmlhttppatients = new XMLHttpRequest();
xmlhttppatients.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(
            'select-patients-container'
        ).innerHTML = this.responseText;
    }
};
xmlhttppatients.open('GET', '../Controllers/selectPatients.php', true);
xmlhttppatients.send();

//get clinic names
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById(
            'select-clinics-container'
        ).innerHTML = this.responseText;
    }
};
xmlhttp.open('GET', '../Controllers/selectClinics.php', true);
xmlhttp.send();

//query a
function getAllDentists() {
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-all-dentists'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open('GET', '../Controllers/getdentists.php', true);
    xmlhttp.send();
}

//WIP
function getAppointmentDetailsForPatient() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-app-details-patient'
            ).innerHTML = this.responseText;
        }
    };
    var e = document.getElementById('select-patients');
    var selectedPatientId = e.options[e.selectedIndex].value;
    xmlhttp.open(
        'GET',
        '../Controllers/getAppDetailsPatient.php?patientID=' + selectedPatientId,
        true
    );
    xmlhttp.send();
}

function getUnpaidBills() {
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-unpaid-bills'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open('GET', '../Controllers/getUnpaidBills.php', true);
    xmlhttp.send();
}

function getAppointmentDetailsForClinic() {
    xmlhttp = new XMLHttpRequest();

    var e = document.getElementById('select-clinics');
    var selectedClinicId = e.options[e.selectedIndex].value;
    var date = document.getElementById('app-date').value;
    xmlhttp.open(
        'GET',
        '../Controllers/getAppDetailsClinic.php?clinicID=' +
            selectedClinicId +
            '&appDate=' +
            date,
        true
    );
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-app-details-clinic'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.send();

}
