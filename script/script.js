document.getElementById('noBtn').addEventListener('mouseover', function() {
    moveButtonRandomly(this);
});

document.getElementById('noBtn').addEventListener('click', function() {
    moveButtonRandomly(this);
});

function moveButtonRandomly(button) {
    alert("invalido")
    const maxWidth = window.innerWidth - button.clientWidth;
    const maxHeight = window.innerHeight - button.clientHeight;
    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}


document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'music/musica.html';
});
