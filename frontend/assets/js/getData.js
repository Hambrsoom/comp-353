window.onload = onLoad();

function onLoad() {
    getSelectClinics();
    getSelectPatients();
    getSelectDentists();
    getAppointments();
}

function getAppointments() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'appointments-table'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/GetAppointmentsForTreatments.php',
        true
    );
    xmlhttp.send();
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
            optionsList.add(new Option('No Dentist', null, null))
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
            let optionsList2 = null;
            if(document.getElementById('select-clinics-2')){
                optionsList2 = document.getElementById('select-clinics-2').options;
            }
            
            let options = [];
            console.log("I reached here  :3 ");
            res.forEach(clinic => {
                console.log("1  " + clinic.clinicName);
                options.push({
                    text: clinic.clinicName,
                    value: clinic.clinicID
                });
            });

            options.forEach(option =>{
                optionsList.add(
                    new Option(option.text, option.value, option.selected)
                );
                if(optionsList2){
                    optionsList2.add(
                        new Option(option.text, option.value, option.selected)
                    )
                }
                
            }
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

function getTreatmentsForAppointments(appId) {
    console.log(appId);
    
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'appointments-table'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetTreatmentsForAppointments.php?appId=' + appId,
        true
    );
    xmlhttp.send();
}




function findTheDateForSunday(dateValue){
    var d = new Date(dateValue);

    d.setDate(d.getDate() +1);
    console.log("getDate(): "+d.getDate());
    console.log("getDay(): "+ d.getDay());
    console.log("date Today: "+ d);
    d.setDate(d.getDate()-d.getDay());
    console.log("date Sunday: "+ d); 

    var month = d.getMonth()+1

    beginningOfWeek = d.getFullYear()+'-'+month+'-'+d.getDate();
    console.log("begin: "+ beginningOfWeek);
    return beginningOfWeek;
}

function findTheDateForSaturday(dateValue){
    console.log("Let's talk about sat now :");
    var d = new Date(dateValue);
    d.setDate(d.getDate() +1);
    console.log("date Today: "+ d);
    d.setDate(d.getDate()+(6-d.getDay()));
    console.log("date Sat: "+ d); 
    
    var month = d.getMonth()+1

    endOfWeek = d.getFullYear()+'-'+month+'-'+d.getDate();
    console.log("begin: "+ endOfWeek);
    return endOfWeek;
}

function getAllAppointmentsForASpecificWeek() {
    let xmlhttp = new XMLHttpRequest();
    
    const dentistId = document.getElementById('select-dentists').value;
    var date = document.getElementById('app-date-doctor').value;
    date = date.substring(6);

    xmlhttp.open(
        'POST',
        '../../Backend/Controllers/QueryControllers/GetAppointmentsForDoctor.php'
    );
    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {            
            document.getElementById(
                'get-all-appointments-for-doctor'
            ).innerHTML = this.responseText;
        }
    };

    xmlhttp.send( 
        '&date=' +
        date +
        '&dentistId=' +
        dentistId);
}