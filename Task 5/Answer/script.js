function insertRow() {
  let myTableRef = document.getElementById("myTable").insertRow(-1);
  let myTableBodyRef = document.getElementById("myTable").insertRow(0);

  let newName = document.getElementById("nameTextField").value;
  let newRoll = document.getElementById("rollNoTextField").value;

  if (newName !== "" && newRoll !== "") {
    let newNameCell = myTableRef.insertCell(0);
    let newRollNoCell = myTableRef.insertCell(1);

    newNameCell.innerHTML = newName;
    newRollNoCell.innerHTML = newRoll;
  } else {
    alert("Values cannot be empty");
  }
}
