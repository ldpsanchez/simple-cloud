let url_current_directory = "../../back_end_app/getCurrentDirectory.php";
let url_create_write_file = "../../back_end_app/createAndWriteFile.php";
let url_create_directory = "../../back_end_app/createDirectory.php";
let url_list_files_serve = "../../back_end_app/getListOfFilesToServe.php";
let btnShowModal = document.getElementById("btnCreateFile");
let btnCloseModal = document.getElementById("btn-close-modal");
let sendDataToserve = document.getElementById("printData");
const myFormElement = document.getElementById("myForm");
let showMessageError = document.getElementById("messageForError");
let btnCloseBannerMessage = document.getElementById("btnCloseBannerMessage");
let modalFile = "modalFile";
let modalDirectory = "modalDirectory";
let btnShowModalDir = document.getElementById("btnShowModalDir");
let btnCloseModalDir = document.getElementById("btnCloseModalDir");
let btnCreateDir = document.getElementById("btnCreateDir");
const myFormElementDirectory = document.getElementById("myFormDirectory");
let btnCloseMessage_directory = document.getElementById("btnCloseMessage-directory");

// funcion anonima auto ejecutable (Obtener directorio actual de trabajo)
(function () {
    fetch(url_current_directory)
    .then(response => {
        return response.text()
    }).then(data_txt => {
        let newData = data_txt;
        document.getElementById("directory-name").textContent = `Directorio actual: ${newData}`;
    })
})();

// Funcion anonima auto ejecutable (Obtener lista de directorios y archivos dentro del directorio recurrente)
(function () {
    let selector = 0;

    fetch(url_list_files_serve, {
        method: "POST",
        body: selector
    }).then(response => response.json())
    .then(function (dataServe) {
        let dataToPrint = dataServe;

        dataToPrint.forEach(function (iterador, indice) {
            let bodySection = document.getElementById("body");
            let contenedor = document.createElement("div");
            contenedor.textContent = `${indice} - ${iterador}`;
            bodySection.appendChild(contenedor);
        })
    });
})();

function toggleModal(){
    document.getElementById(modalFile).classList.toggle("hidden");
    document.getElementById(`${modalFile}-backdrop`).classList.toggle("hidden");
    document.getElementById(modalFile).classList.toggle("flex");
    document.getElementById(`${modalFile}-backdrop`).classList.toggle("flex");
};

function toggleModalDir() {
    document.getElementById(modalDirectory).classList.toggle("hidden");
    document.getElementById(`${modalDirectory}-backdrop`).classList.toggle("hidden");
    document.getElementById(modalDirectory).classList.toggle("flex");
    document.getElementById(`${modalDirectory}-backdrop`).classList.toggle("flex");
}

// Mostrar y esconder el modal
btnShowModal.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);
btnCloseBannerMessage.addEventListener("click", function () {
    showMessageError.classList.toggle("hidden");
});
btnShowModalDir.addEventListener("click", toggleModalDir);
btnCloseModalDir.addEventListener("click", toggleModalDir);
btnCloseMessage_directory.addEventListener("click", function () {
    document.getElementById("responseToServe-dir").classList.toggle("hidden");
})

// Seleccionar el elemento html de formulario
myFormElement.addEventListener("click", function(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.ge

    fetch(url_create_write_file, {
        method: "POST",
        body: formData
    }).then(response => response.text())
    .then(function(dataToServe) {
        let responseToServe = dataToServe;
        let elementError = document.getElementById("elementShowError");

        elementError.textContent = responseToServe;
        showMessageError.classList.toggle("hidden");
        console.log(responseToServe);
    });
})

myFormElementDirectory.addEventListener("click", function(event) {
    event.preventDefault();
    const formDataDirectory = new FormData(event.currentTarget);
    let hello = formDataDirectory.get("nameDir");
    
    fetch(url_create_directory, {
        method: "POST",
        body: formDataDirectory
    }).then(response => response.text())
    .then(function (dataToServe) {
        document.getElementById("messageToServe-directory").textContent = dataToServe;
        document.getElementById("responseToServe-dir").classList.toggle("hidden");
    })
})
