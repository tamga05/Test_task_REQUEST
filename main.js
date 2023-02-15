document.addEventListener('click', function (e) {
    let m = document.querySelector('.view');
    if (e.target.id !== 'box') {
        m.style.opacity = '0';
    } else if (e.target.id === 'box') {
        m.style.opacity = (m.style.opacity !== '1') ? '1' : '0';
    }
});