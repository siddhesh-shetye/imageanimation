function normal(id) {
    var imags = document.getElementsByTagName("IMG");
    for (var i = 0; i < imags.length; i++) {
        if (imags[i] != id) {
            imags[i].classList.remove(imags[i].id+"move");
        }
    }
}

function slide(id) {
    id.classList.add(id.id+"move");
    normal(id);
}

