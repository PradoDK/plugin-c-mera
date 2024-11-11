// This is a JavaScript file

$(document).on("click", "#camera",function(){

navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    window.resolveLocalFileSystemURL(uri, (entry) => {
        let img = document.getElementById('image');
        img.src = entry.toURL();
    }, onFail);
}

function onFail(message) {
    alert('Failed because: ' + message);
}

});
