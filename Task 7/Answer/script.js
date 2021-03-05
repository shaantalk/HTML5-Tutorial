getStudentDetails = () => {
  let id = document.getElementById("rollNoTextField").value;

  if (id !== "") {
    let url = `https://reqres.in/api/users/${id}`;

    console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      data: {},
      success: ({ data }) => {
        document.getElementById("error").classList.add("dNone");
        document.getElementById("success").classList.add("dBlock");
        document.getElementById("error").classList.remove("dBlock");
        document.getElementById("success").classList.remove("dNone");

        var img = document.createElement("IMG");
        img.src = data.avatar;
        img.width = 200;
        img.height = 200;
        document.getElementById("avatar").appendChild(img);

        document.getElementById(
          "first_name"
        ).innerHTML = `First Name : ${data.first_name}`;

        document.getElementById(
          "last_name"
        ).innerHTML = `Last Name : ${data.last_name}`;

        document.getElementById("email").innerHTML = `Email : ${data.email}`;
      },
      error: error => {
        document.getElementById("success").classList.add("dNone");
        document.getElementById("error").classList.add("dBlock");
        document.getElementById("success").classList.remove("dBlock");
        document.getElementById("error").classList.remove("dNone");
        console.error("Tut tut, whats happening yaaaaar...", error);
      },
    });
  } else {
    alert("Enter Roll Number");
  }
};
