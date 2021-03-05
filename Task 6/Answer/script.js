$(document).ready(function () {});

insertDataInCell = (cellData, newRow, isImage = false) => {
  let cell = newRow.insertCell(-1);
  if (isImage) {
    var img = document.createElement("IMG");
    img.src = cellData;
    img.width = 50;
    img.height = 50;
    cell.appendChild(img);
  } else {
    cell.innerHTML = cellData;
  }
};

insertRow = (dataObj, arrAllKeys, arrImageKeys, strTableName) => {
  let newRow = document.getElementById(strTableName).insertRow(-1);

  arrAllKeys.map(key => {
    if (arrImageKeys.includes(key)) {
      insertDataInCell(dataObj[key], newRow, true);
    } else {
      insertDataInCell(dataObj[key], newRow);
    }
  });
};

getStudentDetails = () => {
  // ==========API CALLS==========
  const url = "https://reqres.in/api/users?page=1"; //Success 200
  // const url = "https://reqres.in/api/users/23"; // Error 404

  // Group 1 : Vanilla JS way of calling API
  // Method 1.a : Fetching a response form an API using XMLHttpRequest (ES-5)
  // let request = new XMLHttpRequest();
  // request.open("GET", url);
  // request.send();
  // request.onload = () => {
  //   if (request.status === 200) {
  //     arrAllKeys = ["id", "avatar", "first_name", "last_name", "email"];
  //     arrImageKeys = ["avatar"];
  //     strTableName = "myTable";
  //     JSON.parse(request.response)["data"].map(student =>
  //       insertRow(student, arrAllKeys, arrImageKeys, strTableName)
  //     );
  //   } else if (request.status === 404) {
  //     console.error("Tut tut, whats happening yaaaaar...");
  //   } else {
  //     console.log("eh !");
  //   }
  // };
  // Method 1.b : Fetching a response form an API using FETCH (ES-6)

  // fetch(url)
  //   .then(response => response.json())
  //   .then(({ data }) => {
  //     arrAllKeys = ["id", "avatar", "first_name", "last_name", "email"];
  //     arrImageKeys = ["avatar"];
  //     strTableName = "myTable";
  //     data.map(student =>
  //       insertRow(student, arrAllKeys, arrImageKeys, strTableName)
  //     );
  //   })
  //   .catch(error => {
  //     // Code when API call is a fail
  //     console.error(error);
  //   });

  // Group 2 : Using Third Party Libraries
  // Method 2.a : Fetching a response form an API using AJAX from JQuery
  // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  // https://api.jquery.com/
  // $.ajax({
  //   type: "GET",
  //   url: url,
  //   data: {},
  //   success: ({ data }) => {
  //     arrAllKeys = ["id", "avatar", "first_name", "last_name", "email"];
  //     arrImageKeys = ["avatar"];
  //     strTableName = "myTable";
  //     data.map(student =>
  //       insertRow(student, arrAllKeys, arrImageKeys, strTableName)
  //     );
  //   },
  //   error: error => console.error("Tut tut, whats happening yaaaaar...", error),
  // });
  // Method 2.b : Fetching a response form an API using Axios
  // <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  // https://github.com/axios/axios
  // axios
  //   .get(url)
  //   .then(({ data: { data: studentData } }) => {
  //     arrAllKeys = ["id", "avatar", "first_name", "last_name", "email"];
  //     arrImageKeys = ["avatar"];
  //     strTableName = "myTable";
  //     studentData.map(student =>
  //       insertRow(student, arrAllKeys, arrImageKeys, strTableName)
  //     );
  //   })
  //   .catch(error =>
  //     console.error("Tut tut, whats happening yaaaaar...", error)
  //   );
};
