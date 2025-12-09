document.addEventListener("DOMContentLoaded", function() {
    // 1. Cari tombol dengan class 'tombol-merah'
    const tombolGabung = document.querySelector('.tombol-merah');

    // 2. Cek apakah tombolnya ada (untuk mencegah error)
    if (tombolGabung) {
        // 3. Tambahkan fungsi saat tombol diklik
        tombolGabung.addEventListener('click', function() {
            // Arahkan ke Berita.html dan cari id="gabung"
            window.location.href = 'Berita.html#gabung';
        });
    }
});