function executeStatement() {
    const statement = document.getElementById('sql-statement').value.trim();
    statement = sanitizeInput(statement);
    const statementType = statement
        .substring(0, statement.indexOf(' '))
        .trim()
        .toUpperCase();

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', '../../Backend/Controllers/AdminController.php');
    xmlhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    );

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            document.getElementById(
                'execute-result'
            ).innerHTML = this.responseText;
        }
    };
    xmlhttp.send('statementType=' + statementType + '&statement=' + statement);
}

function sanitizeInput(statement) {
    statement = statement.trim();
    statement = statement.replace(/\n/g, " ");
    return statement

}
