window.onload = onLoad();

function onLoad() {
    populateEditAppointmentPage();
}


function populateEditAppointmentPage(){
    var appId = localStorage['objectToPass'];
    console.log("myData: " + appId);
    localStorage.removeItem( 'objectToPass' ); 
    getAppointmentDetailsByAppId(appId);
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