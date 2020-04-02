window.onload = onLoad();

function onLoad() {
    getSelectClinics();
    getSelectPatients();
    getSelectDentists();
}

//get dentists names
function getSelectDentists() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);

            let optionsList = document.getElementById('select-dentists').options;
            let options = [];
            res.forEach(dentist => {
                options.push({
                    text: dentist.firstName + ' ' + dentist.lastName,
                    value: dentist.dentistID
                });
            });

            options.forEach(option =>
                optionsList.add(
                    new Option(option.text, option.value, option.selected)
                )
            );
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/GetSelectDentists.php',
        true
    );
    xmlhttp.send();
}

//get patient names
function getSelectPatients() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);

            let optionsList = document.getElementById('select-patients')
                .options;
            let options = [];
            res.forEach(patient => {
                options.push({
                    text: patient.firstName + ' ' + patient.lastName,
                    value: patient.patientID
                });
            });

            options.forEach(option =>
                optionsList.add(
                    new Option(option.text, option.value, option.selected)
                )
            );
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/GetSelectPatients.php',
        true
    );
    xmlhttp.send();
}

//get clinic names
function getSelectClinics() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);

            let optionsList = document.getElementById('select-clinics').options;
            let options = [];
            res.forEach(clinic => {
                options.push({
                    text: clinic.clinicName,
                    value: clinic.clinicID
                });
            });

            options.forEach(option =>
                optionsList.add(
                    new Option(option.text, option.value, option.selected)
                )
            );
        }
    };
    xmlhttp.open('GET', '../../Backend/Controllers/GetSelectClinics.php', true);
    xmlhttp.send();
}

//query a
function getAllDentists() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-all-dentists'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAllDentists.php',
        true
    );
    xmlhttp.send();
}

//WIP
function getAppointmentDetailsForPatient() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-app-details-patient'
            ).innerHTML = this.responseText;
        }
    };
    const e = document.getElementById('select-patients');
    const selectedPatientId = e.options[e.selectedIndex].value;
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAppDetailsPatient.php?patientID=' +
            selectedPatientId,
        true
    );
    xmlhttp.send();
}

function getUnpaidBills() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-unpaid-bills'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetUnpaidBills.php',
        true
    );
    xmlhttp.send();
}

function getAppointmentDetailsForClinic() {
    let xmlhttp = new XMLHttpRequest();

    const e = document.getElementById('select-clinics');
    const selectedClinicId = e.options[e.selectedIndex].value;
    console.log(selectedClinicId);
    
    const date = document.getElementById('app-date').value;
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAppDetailsClinic.php?clinicID=' +
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

function getMissedAppointments() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-missed-apps'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetMissedAppointments.php',
        true
    );
    xmlhttp.send();
}
