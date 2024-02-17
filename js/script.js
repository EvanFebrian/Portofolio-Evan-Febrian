$(document).ready(function () {
    // Menangani klik pada link navbar
    $('nav a').on('click', function (event) {
        // Menghentikan default behavior dari link
        event.preventDefault();

        // Mendapatkan tujuan scroll dari atribut href
        var target = $(this).attr('href');

        // Menganimasikan scrolling ke elemen dengan ID yang sesuai
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Waktu animasi (dalam milidetik)
    });
});

// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated-element');

    function checkScroll() {
        animatedElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.75 && elementPosition > -element.clientHeight) {
                // Jika elemen berada dalam batas scroll, atur animasi masuk
                element.classList.add('animate-in');
            } else {
                // Jika elemen di luar batas scroll, hapus animasi masuk
                element.classList.remove('animate-in');
            }
        });
    }

    // Panggil fungsi saat halaman dimuat dan saat menggulir
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});
