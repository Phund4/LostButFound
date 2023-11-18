function profileIconClickHandler(props) {
    let rightboxChilds = document.getElementsByClassName('profile-rightbox-child');
    for (let child of rightboxChilds) {
        child.classList.add("hide");
    }
    document.querySelector(`.${props.id}`).classList.remove('hide');
}

export default profileIconClickHandler;