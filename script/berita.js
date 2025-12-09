document.addEventListener('DOMContentLoaded', function() {

    // =========================================================
    //  KONTROL STATUS PENDAFTARAN (SETTINGS)
    // =========================================================
    // false = Pendaftaran TUTUP (Tampilan Coming Soon)
    // true  = Pendaftaran BUKA (Tampilan Form)
    
    const STATUS_PENDAFTARAN = true; // <--- UBAH DISINI 

    // Logika Pengaturan Tampilan
    const viewBuka = document.getElementById('pendaftaran-buka');
    const viewTutup = document.getElementById('pendaftaran-tutup');

    if (viewBuka && viewTutup) {
        if (STATUS_PENDAFTARAN === true) {
            viewBuka.style.display = 'block';
            viewTutup.style.display = 'none';
        } else {
            viewBuka.style.display = 'none';
            viewTutup.style.display = 'block';
        }
    }


    // ============================================
    // 1. LOGIKA SLIDER BERITA
    // ============================================
    const slider = document.getElementById('newsSlider');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const scrollAmount = 350; 

    if(nextBtn && prevBtn && slider) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // ============================================
    // 2. LOGIKA KIRIM DATA KE GOOGLE SHEET
    // ============================================
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSNbYAQ4I0emUD628Ib0tX7Eo6Nc2BsCQNU__CWbl6UMWqp_rnKPKqzS-1dt-t9BXlwg/exec'; 
    const form = document.getElementById('formRegistrasi');
    const btnKirim = document.querySelector('.btn-daftar');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            // Ubah tombol jadi Loading
            const originalBtnText = btnKirim.innerHTML;
            btnKirim.innerHTML = 'Mengirim... <i class="fas fa-spinner fa-spin"></i>';
            btnKirim.disabled = true;

            // Ambil data
            let requestBody = new FormData();
            requestBody.append('Nama', document.getElementById('nama').value);
            requestBody.append('NIM', document.getElementById('nim').value);
            requestBody.append('Prodi', document.getElementById('prodi').value);
            requestBody.append('NoHP', document.getElementById('noHp').value);
            requestBody.append('Alasan', document.getElementById('alasan').value);

            // Kirim ke Google Script
            fetch(scriptURL, { method: 'POST', body: requestBody})
                .then(response => {
                    alert('Terima kasih! Pendaftaran berhasil dikirim.');
                    form.reset();
                    btnKirim.innerHTML = originalBtnText;
                    btnKirim.disabled = false;
                })
                .catch(error => {
                    alert('Maaf, terjadi kesalahan! Silakan coba lagi.');
                    console.error('Error!', error.message);
                    btnKirim.innerHTML = originalBtnText;
                    btnKirim.disabled = false;
                });
        });
    }
});