document.addEventListener("DOMContentLoaded", function() {
    const tombolGabung = document.querySelector('.tombol-merah');
    if (tombolGabung) {
        tombolGabung.addEventListener('click', function() {
            window.location.href = 'Berita.html#gabung';
        });
    }
});