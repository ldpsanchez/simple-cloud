let url = "http://172.19.0.2/back_end_app/getCwd.php";

(function () {
    fetch(url)
    .then(response => {
        return response.text()
    }).then(data_txt => {
        let newData = data_txt;
        document.getElementById("directory-name").innerHTML = `Directorio actual: ${newData}`;
    })
})()
