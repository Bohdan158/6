document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const duration = document.getElementById('duration').value;

    const glitchText = document.createElement('div');
    glitchText.classList.add('glitch-text');
    glitchText.style.color = color;
    glitchText.style.animationDuration = `${duration}s`;
    glitchText.innerText = text;

    document.getElementById('glitchTextContainer').innerHTML = '';
    document.getElementById('glitchTextContainer').appendChild(glitchText);
});
