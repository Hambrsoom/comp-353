window.onload = onLoad();

function onLoad() {
    getSelectClinics();
    getSelectPatients();
    populateEditAppointmentPage();
}


function populateEditAppointmentPage(){
    var appId = localStorage['objectToPass'];
    localStorage.removeItem( 'objectToPass' ); 
    getAppointmentDetailsByAppId(appId);
}

function getAppointmentDetailsByAppId(appId){
    let xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAppointmentByAppId.php?appId=' +
        appId, 
        true
    );
    xmlhttp.onreadystatechange = function() {
        console.log("status: " + this.status);
        if (this.readyState == 4 && this.status == 200) {
            let res = JSON.parse(this.response);
            console.log("I got here :3")
            console.log("hello: "+res[0].appointmentsID);
            console.log(this.responseText);
            document.getElementById("select-patients").value = res[0].patientID;
            document.getElementById("select-clinics").value = res[0].clinicID;
            getReceptionistsAndDoctorsInAClinic();
            document.getElementById("select-dentists").value = res[0].dentistID;
            document.getElementById("select-receptionists").value = res[0].receptionistID;
            document.getElementById("appoitment-date").value = res[0].date;
            getDoctorAvailabilityforADate(res[0].dentistID, res[0].time);
            document.getElementById("appointment-time").value = res[0].time;
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


function getDoctorAvailabilityforADate(dentistId, appTime){
    let xmlhttp = new XMLHttpRequest();
    let date = document.getElementById('appoitment-date').value;

    console.log("date: "+ date);
    console.log("dentist: "+ dentistId);

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
                doctorAvailabilities.push(app.time);
            });
            populateTimeDropdown(doctorAvailabilities,options, optionsList, appTime);
        }
    };
    xmlhttp.open('GET', '../../Backend/Controllers/QueryControllers/GetDoctorAvailabilities.php?dentistId=' + dentistId + '&date='+ date,
    true);
    xmlhttp.send();
}

function populateTimeDropdown(doctorAvailabilities,options,optionsList, appTime) {
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
        if(!checkIfDoctorHasAppointment(doctorAvailabilities,timeValue) || appTime==timeValue) {
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