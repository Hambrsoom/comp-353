<?php
    require('../../Services/SelectQueryService.php');
    //$sql = "SELECT * FROM bills WHERE paid = 0";

    $sql = "SELECT 
    appointment.appointmentsID as `AppointmentID`, 
    appointment.date as `Date`, 
    appointment.time as `Time`, 
    concat(p.firstName,' ', p.lastName) as `Patient's Name`,
    CostPerAppointment.totalCost as `Total Cost($)`
    FROM bills as bills, appointments as appointment, patients as p, (select app.appointmentsID as appointmentID, SUM(t.cost) as totalCost
    from treatments as t, appointments as app, consist_of as treatmentsInApp
    where treatmentsInApp.treatment_id = t.treatmentID and app.appointmentsID = treatmentsInApp.appointment_id
    group by app.appointmentsID) as CostPerAppointment
    WHERE  costPerAppointment.appointmentID = appointment.appointmentsID AND appointment.billID = bills.billID AND bills.paid=0 AND p.patientID = appointment.patientID;";    

    echo executeSelectStatement($sql);
?>
