function myShowHideFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
     return x.type = "text";
    } else {
      x.type = "password";
    }
  }