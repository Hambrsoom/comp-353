window.onload = onLoad();

function onLoad() {
    getSelectClinics();
    getSelectPatients();
}

// function getAllAppointments() {
//     let xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById(
//                 'get-all-appointments'
//             ).innerHTML = this.responseText;
//         }
//     };
//     xmlhttp.open(
//         'GET',
//         '../../Backend/Controllers/QueryControllers/GetAllAppointments.php',
//         true
//     );
//     xmlhttp.send();
// }




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
    //let xmlhttp = new XMLHttpRequest();

    console.log("Hello there: " + appId);
    console.log("Hello: "+ rowId);
    // $('#app-table').on('click', '.btn', function(){
    //     $(this).closest('tr').remove();
    // });

    // xmlhttp.open(
    //     'POST',
    //     '../../Backend/Controllers/RemoveControllers/RemoveAppointment.php?'
    // );

    // xmlhttp.setRequestHeader(
    //     'Content-type',
    //     'application/x-www-form-urlencoded'
    // );

    // xmlhttp.send('appId=' + appId );
}

function editAppointmentPage(appId){
    console.log(appId);
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
    console.log("Hey: " + clinicId);

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



