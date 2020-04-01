
if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttpdentists = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xmlhttpdentists = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttpdentists.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("select-dentists-container").innerHTML = this.responseText;
    }
};
xmlhttpdentists.open("GET","selectDentists.php",true);
xmlhttpdentists.send();

if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("select-patients-container").innerHTML = this.responseText;
    }
};
xmlhttp.open("GET","selectPatients.php",true);
xmlhttp.send();


//query a
function getAllDentists() {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("get-all-dentists").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getdentists.php",true);
        xmlhttp.send();
}

//WIP
function getAppointmentDetailsForPatient() {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("get-app-details-patient").innerHTML = this.responseText;
            }
        };
        var e = document.getElementById("select-patients");
        var selectedPatientId = e.options[e.selectedIndex].value;
        console.log(selectedPatientId);
        xmlhttp.open("GET","getAppDetailsPatient.php?patientID="+selectedPatientId,true);
        xmlhttp.send();
}


function getUnpaidBills() {

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("get-unpaid-bills").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","getUnpaidBills.php",true);
        xmlhttp.send();
}

function addPatient() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var firstName = document.getElementById("patient-first-name").value;
    var lastName = document.getElementById("patient-last-name").value;
    xmlhttp.open("POST","addPatient.php?");
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("firstName="+firstName+"&lastName="+lastName);
}

