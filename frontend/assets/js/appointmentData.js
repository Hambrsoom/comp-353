window.onload = onLoad();

function onLoad() {
    getSelectClinics();
    getSelectPatients();
    //populateTimeDropdown();
}

function getAllAppointments() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-all-appointments'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAllAppointments.php',
        true
    );
    xmlhttp.send();
}

var dentistId = 0;

function getAppointmentDetailsForEditOrDelete() {
    let xmlhttp = new XMLHttpRequest();

    const e = document.getElementById('select-clinics-2');
    const selectedClinicId = e.options[e.selectedIndex].value;
    console.log(selectedClinicId);
    
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAllAppDetailsForDeleteOrEdit.php?clinicID=' +
            selectedClinicId,
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

function deteteAppointment(appId, rowId){
    let xmlhttp = new XMLHttpRequest();

    console.log("Hello there: " + appId);
    console.log("Hello: "+ rowId);

    xmlhttp.open(
        'POST',
        '../../Backend/Controllers/RemoveControllers/RemoveAppointment.php?'
    );

    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getAppointmentDetailsForEditOrDelete();
        }
    };

    xmlhttp.send('appId=' + appId );
   
}

function editAppointmentPage(appId){
    console.log("editPage: " + appId);
    localStorage.setItem('objectToPass',appId);
    location.replace("editAppointment.html");
}


function getDoctorsInAClinic(){
    let xmlhttp = new XMLHttpRequest();

    const e = document.getElementById('select-clinics');
    const clinicId = e.options[e.selectedIndex].value;
    console.log("Hey: " + clinicId);
    
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetDoctorsByClinicId.php?clinicId=' +
        clinicId, 
        true
    );
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'select-dentists'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.send();
}


function getReceptionistsAndDoctorsInAClinic(){

    const e = document.getElementById('select-clinics');
    const clinicId = e.options[e.selectedIndex].value;
    
    getDoctorsByClinicID(clinicId);
    getRecpetionistsByClinicID(clinicId);
}

function getDoctorsByClinicID(clinicId){
    let xmlhttp = new XMLHttpRequest();

    console.log("Hey: " + clinicId);
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);

            let optionsList = document.getElementById('select-dentists')
                .options;

            for (i = optionsList.length-1; i >= 0; i--) {
                optionsList.remove(i);
            }
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
        '../../Backend/Controllers/QueryControllers/GetDoctorsByClinicId.php?clinicId=' +
        clinicId, 
        true
    );

    xmlhttp.send();
}


function getRecpetionistsByClinicID(clinicId){
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);

            let optionsList = document.getElementById('select-receptionists')
                .options;

            for (i = optionsList.length-1; i >= 0; i--) {
                optionsList.remove(i);
            }
            let options = [];
            res.forEach(receptionist => {
                options.push({
                    text: receptionist.firstName + ' ' + receptionist.lastName,
                    value: receptionist.receptionistsID
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
        '../../Backend/Controllers/QueryControllers/GetReceptionistsByClinicId.php?clinicId=' +
        clinicId, 
        true
    );

    xmlhttp.send();
}


function getAppointmentDetailsByAppId(appId){
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAppDetailsClinic.php?appId=' +
        appId, 
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
            res.forEach(clinic => {
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





function getDoctorAvailabilityforADate(){
    let xmlhttp = new XMLHttpRequest();
    let date = document.getElementById('appoitment-date').value;
    const dentistId = document.getElementById('select-dentists').value;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);

            var optionsList = document.getElementById('appointment-time').options;
            
            for (i = optionsList.length-1; i >= 0; i--) {
                optionsList.remove(i);
            }

            let options = [];
            let doctorAvailabilities = [];
            
            res.forEach(app => {
                console.log("1  " + app.time);
                doctorAvailabilities.push(app.time);
            });
            populateTimeDropdown(doctorAvailabilities,options, optionsList);
        }
    };
    xmlhttp.open('GET', '../../Backend/Controllers/QueryControllers/GetDoctorAvailabilities.php?dentistId=' + dentistId + '&date='+ date,
    true);
    xmlhttp.send();
}

function populateTimeDropdown(doctorAvailabilities,options,optionsList) {
    for(var i = 540; i <= 1020; i += 30){
        hours = Math.floor(i / 60);
        minutes = i % 60;
        if (minutes < 10){
            minutes = '0' + minutes; // adding leading zero
        }
        // hours = hours % 12;
        if (hours === 0){
            hours = 12;
        }
        timeValue = hours + ':' + minutes + ':00';
        if(!checkIfDoctorHasAppointment(doctorAvailabilities,timeValue)) {
            options.push({
                    text: hours + ':' + minutes,
                    value: hours + ':' + minutes + ':00'
            });
        }
    }
    options.forEach(option =>
        optionsList.add(
            new Option(option.text, option.value, option.selected)
    ));
}

function checkIfDoctorHasAppointment(doctorAvailabilities, time){
    var bool = false;
    doctorAvailabilities.forEach(option =>{
        if(option == time){
            bool = true;
        }     
    });
    return bool;
}



