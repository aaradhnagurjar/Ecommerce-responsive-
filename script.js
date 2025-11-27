const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

bar.onclick = () => {
    nav.classList.toggle('active');
};

