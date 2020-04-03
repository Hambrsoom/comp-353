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
    date = date.substring(6);
    console.log(dentistId);
    console.log(date);
    
    // beginningOfWeek = findTheDateForSunday(date);   
    // endOfWeek = findTheDateForSaturday(date); 

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



