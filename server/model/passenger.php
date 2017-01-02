<?php
function getPassengers() {
    global $conn;
    $passengers = array();
    $sql = "SELECT * FROM passenger";
    $result = $conn->query($sql);

    while($passenger = $result->fetch_object()) {
        $passengers[] = $passenger;
    }
    
    return $passengers;
}

function getPassengerById($id) {
    global $conn;
    $sql = "SELECT * FROM passenger WHERE id=".$id;
    $result = $conn->query($sql);
    $passenger = $result->fetch_object();
    return $passenger;
}

function deletePassengerById($id) {
    global $conn;
    $sql = "DELETE FROM passenger WHERE id=".$id;
    $result = $conn->query($sql);
}

function insertPassenger($passenger) {
    global $conn;
    $newId = null;
    $sql = 'INSERT INTO passenger (name, date_of_birth) VALUES ' . 
           ' ("' . $passenger->name . '", "' . $passenger->date_of_birth .'")';

    if ($conn->query($sql) === TRUE) {
        // echo "New record created successfully";
        $newId = $conn->insert_id;
    }
    return $newId;
}

function updatePassenger($passenger) {
    global $conn;
    $sql = 'UPDATE passenger SET name="' . $passenger->name .'" , date_of_birth="'. $passenger->date_of_birth.'" WHERE id=' . $passenger->id;
    $conn->query($sql);
}

?>