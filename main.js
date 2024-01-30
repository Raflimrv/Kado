onload = () => {
        // Menghapus kelas "container" dari body
        document.body.classList.remove("container");
    
        // Mengambil elemen audio dengan id "backgroundAudio"
        const audio = document.getElementById('backgroundAudio');
    
        // Fungsi untuk memastikan audio tetap berlanjut dan diulang
        audio.addEventListener('ended', function () {
            audio.currentTime = 0; // Mengatur waktu pemutaran kembali ke awal
            audio.play();
        });
    
        // Memastikan audio dimulai ketika halaman dimuat
        audio.play();
    };