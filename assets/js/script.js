const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name-hero').value;
    const xp = parseInt(document.getElementById('level-hero').value);
    
    let level = '';

    if (xp < 1000) {
        level = 'FERRO';
    } else if (xp >= 1001 && xp <= 2000) {
        level = 'BRONZE';
    } else if (xp >= 2001 && xp <= 5000) {
        level = 'PRATA';
    } else if (xp >= 5001 && xp <= 7000) {
        level = 'OURO';
    } else if (xp >= 7001 && xp <= 8000) {
        level = 'PLATINA';
    } else if (xp >= 8001 && xp <= 9000) {
        level = 'ASCENDENTE';
    } else if (xp >= 9001 && xp <= 10000) {
        level = 'IMORTAL';
    } else {
        level = 'RADIANTE';
    }

    const value = document.getElementById('value');
    value.textContent = `O Herói de nome ${name} está no nível ${level}`;

    document.getElementById('info').classList.remove('hidden');
});



