document.addEventListener('DOMContentLoaded', function() {
    // URL Google Script Anda (Pastikan ini URL terbaru dari Deploy terakhir)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyBo2lsuyqy2ZMOxer4iD_hAqKuJBcQqTChhGXWFVOnTo2ae23-PIXaswfrLOaKDb6xUQ/exec'; 
    
    const form = document.getElementById('formKontak');
    const btnKirim = form.querySelector('button[type="submit"]');
    const btnText = form.querySelector('.text-wrapper-15');
    
    // Modal
    const modalElement = document.getElementById('terimakasihModal');
    const myModal = new bootstrap.Modal(modalElement);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        setLoading(true);

        fetch(scriptURL, { 
            method: 'POST', 
            mode: 'no-cors',
            body: new FormData(form)
        })
        .then(() => {
            console.log('Terkirim (No-CORS mode)');
            setLoading(false);
            form.reset();
            myModal.show();
        })
        .catch(error => {
            console.error('Error!', error.message);
            setLoading(false);
            alert('Maaf, ada kesalahan teknis. Coba cek koneksi internet Anda.');
        });
    });

    function setLoading(isLoading) {
        if (isLoading) {
            btnKirim.disabled = true;
            if (!btnKirim.dataset.originalText) {
                btnKirim.dataset.originalText = btnText.innerHTML;
            }
            btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        } else {
            btnKirim.disabled = false;
            btnText.innerHTML = btnKirim.dataset.originalText;
        }
    }
});