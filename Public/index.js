function validation() {
    var err = false;
    var sname = document.getElementById("name").value;
    if (sname == "") {
        document.getElementById("p1").innerHTML = " * Required *";
        var err = true;
    }
    else {
        document.getElementById("p1").innerHTML = " ";
    }
    var email = document.getElementById("mail").value;
    var mail = /^([A-Za-z0-9._])+\@([A-Za-z])+\.([a-z]{3})+$/;
    if (email.match(mail)) {
        document.getElementById("p2").innerHTML = "";
    }
    else {
        if (email == "") {
            document.getElementById("p2").innerHTML = " * Required *";
            var err = true;
        }
        else {
            document.getElementById("p2").innerHTML = "* correct email format @gmail.com *";
            var err = true;
        }
    }
    var fname = document.getElementById("fname").value;
    if (fname == "") {
        document.getElementById("p3").innerHTML = " * Required *";
        var err = true;
    }
    else {
        document.getElementById("p3").innerHTML = " ";
    }
    var number = document.getElementById("number").value;
    var num = /^([0-9]{10})+$/;
    if (number.match(num)) {
        document.getElementById("p4").innerHTML = "";
    }
    else {
        if (number == "") {
            document.getElementById("p4").innerHTML = " * Required *";
            var err = true;
        }
        else {
            document.getElementById("p4").innerHTML = " 10 number only ";
            var err = true;
        }
    }
    var stuobj = {
        studname: sname,
        email: email,
        fname: fname,
        number: number
    }
    var arr = [];

    if (err) {
        return;
    }
    else {
        arr.push(stuobj);
    }
    console.log(arr);
    for (i = 0; i < arr.length; i++) {
        document.getElementById("form").innerHTML += "<tr><td>" + arr[i].studname + "</td>" + "<td>" + arr[i].email + "</td>"
            + "<td>" + arr[i].fname + "</td>" + "<td>" + arr[i].number + "</td></tr>";
    }
}
function myFunction() {
   var input = document.getElementById("myinput");
  var filter = input.value.toUpperCase();
   var table = document.getElementById("mytable");
   var tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
     var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
           var txtvalue = td.textContent || td.innerText;
            if (txtvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}