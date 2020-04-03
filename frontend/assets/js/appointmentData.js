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


function getAllAppointmentsForASpecificWeek() {
    let xmlhttp = new XMLHttpRequest();
    
    const dentistId = document.getElementById('select-dentists').value;
    var date = document.getElementById('app-date-doctor').value;
    console.log("date: "+date);
    findTheDateForSunday(date);    

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(
                'get-all-appointments-for-doctor'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.open(
        'GET',
        '../../Backend/Controllers/QueryControllers/GetAllAppointments.php',
        true
    );
    xmlhttp.send( 
        '&date=' +
        date +
        '&dentistId=' +
        dentistId);
}

function findTheDateForSunday(dateValue){
    date1 = dateValue;
    var d = new Date(date1);
    d.setDate(d.getDate() +1);
    console.log("date Today: "+ d);
    d.setDate(d.getDate()-d.getDay());
    console.log("date Sunday: "+ d); 

    var dd = d.getDate();
    var mm = d.getMonth()+1;
    var yyyy = d.getFullYear();
    beginningOfWeek = yyyy+'-'+mm+'-'+dd;
    console.log("begin: "+ beginningOfWeek);
    return beginningOfWeek;
}



