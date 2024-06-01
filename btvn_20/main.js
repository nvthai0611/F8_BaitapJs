
// Cách dùng mảng và phương thức map trong mảng
document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('text');
    const words = text.innerText.split(' ');
    let currentIndex = 0;

    function highlightWord() {
        text.innerHTML = words.map((word, index) => {
            return index === currentIndex ? `<span class="highlight">${word}</span>` : word;
        }).join(' ');
        currentIndex = (currentIndex + 1) % words.length;
    }
    highlightWord();
    setInterval(highlightWord, 1000);
});



