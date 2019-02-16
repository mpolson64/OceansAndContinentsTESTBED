<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://unpkg.com/tabulator-tables@4.1.4/dist/css/tabulator.min.css" rel="stylesheet">
</head>

<body>
    <script type="text/javascript" src="https://unpkg.com/tabulator-tables@4.0.5/dist/js/tabulator.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/d3@5.8.0/dist/d3.min.js"></script>
    <form>
        <table>
            <tr>
                <th>Field</th>
                <th>Show?</th>
                <th>Filter</th>
            </tr>
            <tr>
                <td>ID</td>
                <td><input type="checkbox" id="idCheck" value="ID" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="idFilter"></td>
            </tr>
            <tr>
                <td>Registree</td>
                <td><input type="checkbox" id="registreeCheck" value="Registree" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="registreeFilter"></td>
            </tr>
            <tr>
                <td>Status</td>
                <td><input type="checkbox" id="statusCheck" value="Status" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="statusFilter"></td>
            </tr>
            <tr>
                <td>Sex</td>
                <td><input type="checkbox" id="sexCheck" value="Sex" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="sexFilter"></td>
            </tr>
            <tr>
                <td>Origin</td>
                <td><input type="checkbox" id="originCheck" value="Origin" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="originFilter"></td>
            </tr>
            <tr>
                <td>Age</td>
                <td><input type="checkbox" id="ageCheck" value="Age" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="ageFilter"></td>
            </tr>
            <tr>
                <td>Occupation</td>
                <td><input type="checkbox" id="occupationCheck" value="Occupation" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="occupationFilter"></td>
            </tr>
            <tr>
                <td>Master</td>
                <td><input type="checkbox" id="masterCheck" value="Master" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="masterFilter"></td>
            </tr>
            <tr>
                <td>Master Residence</td>
                <td><input type="checkbox" id="masterResidenceCheck" value="Master Residence" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="masterResidenceFilter"></td>
            </tr>
            <tr>
                <td>Registration Date</td>
                <td><input type="checkbox" id="registrationDateCheck" value="Registration Date" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="registrationDateFilter"></td>
            </tr>
            <tr>
                <td>Registration District</td>
                <td><input type="checkbox" id="registrationDistrictCheck" value="Registration District" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="registationDistrictFilter"></td>
            </tr>
            <tr>
                <td>Sources</td>
                <td><input type="checkbox" id="sourcesCheck" value="Sources" onclick="updateCols(table)" checked></td>
                <td><input type="text" id="sourcesFilter"></td>
            </tr>
        </table>
    </form>

    <div id="table"></div>

    <script type="text/javascript" src="globals.js"></script>
    <script type="text/javascript" src="control.js"></script>
    <script type="text/javascript" src="table.js"></script>
</body>

</html>
