export function prettyTextArea() {
    var tx = document.getElementsByClassName('profile-constructor-textarea');
    for (var i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
    }
    function OnInput() {
        this.style.height = (this.scrollHeight) + 'px';
    }
}

export function keyDownHandler(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
}