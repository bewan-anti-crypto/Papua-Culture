// Menu toggle untuk responsif
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Tutup menu saat link diklik (untuk mobile)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Highlight menu aktif saat scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fungsi untuk menambah ke keranjang (simulasi)
function addToCart(productName) {
    let cartCount = document.querySelector('.cart-count');
    if (!cartCount) {
        // Buat elemen counter jika belum ada (di halaman utama ada, di detail mungkin tidak)
        alert(`${productName} telah ditambahkan ke keranjang!`);
        return;
    }
    let currentCount = parseInt(cartCount.textContent);
    currentCount++;
    cartCount.textContent = currentCount;

    alert(`${productName} telah ditambahkan ke keranjang!`);

    // Animasi pada ikon keranjang
    const cartIcon = document.querySelector('.cart');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

// Reset keranjang ke 0 saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = '0';
    }
});