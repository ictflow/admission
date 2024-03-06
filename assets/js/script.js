let viewTheImage = document.getElementById("viewImage");
let uploadTheImage = document.getElementById("uploadImage");

uploadTheImage.onchange = function(){
    viewTheImage.src = URL.createObjectURL(uploadTheImage.files[0]);
}