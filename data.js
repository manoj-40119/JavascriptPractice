var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      console.log(response.companies[1].networth);
    }
};
xhttp.open("GET", "file.json", true);
xhttp.send();