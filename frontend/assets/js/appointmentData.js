window.onload = onLoad();

function onLoad() {
    // getDoctorsInAClinic();
    // getReceptionistsInAClinic();
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


// function getAllAppointmentsForASpecificWeek() {
//     let xmlhttp = new XMLHttpRequest();
    
//     const dentistId = document.getElementById('select-dentists').value;
//     var date = document.getElementById('app-date-doctor').value;
//     date = date.substring(6);
//     console.log(dentistId);
//     console.log(date);

//     xmlhttp.open(
//         'POST',
//         '../../Backend/Controllers/QueryControllers/GetAppointmentsForDoctor.php'
//     );
//     xmlhttp.setRequestHeader(
//         'Content-type',
//         'application/x-www-form-urlencoded'
//     );

//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById(
//                 'get-all-appointments-for-doctor'
//             ).innerHTML = this.responseText;
//         }
//     };

//     xmlhttp.send( 
//         '&date=' +
//         date +
//         '&dentistId=' +
//         dentistId);
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


function getReceptionistsInAClinic(){

    const e = document.getElementById('select-clinics');
    const clinicId = e.options[e.selectedIndex].value;
    
    getDoctorsByClinicID(clinicId)
    getRecpetionistsByClinicID(clinicId)
}

function getDoctorsByClinicID(clinicId){
    let xmlhttp = new XMLHttpRequest();

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


function getRecpetionistsByClinicID(clinicId){
    let xmlhttp = new XMLHttpRequest();
    console.log("Hey: " + clinicId);
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetReceptionistsByClinicId.php?clinicId=' +
        clinicId, 
        true
    );
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'select-receptionists'
            ).innerHTML = this.responseText;
        }
    };
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



