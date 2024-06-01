
// cách thuần chay ko dùng mảng
function wrapWordsInSpans(element) {
    let text = element.innerHTML;
    let newText = '';
    let word = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ' || i === text.length - 1) {
            if (i === text.length - 1 && text[i] !== ' ') {
                word += text[i];
            }
            newText += `<span>${word}</span> `;
            word = '';
        } else {
            word += text[i];
        }
    }

    element.innerHTML = newText.trim();
}

function highlightWord() {
    const words = document.getElementById('text2').getElementsByTagName('span');
    words[currentIndex].classList.remove('highlight');
    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.add('highlight');
}

const textElement = document.getElementById('text2');
let currentIndex = 0;

wrapWordsInSpans(textElement);
document.getElementById('text2').getElementsByTagName('span')[0].classList.add('highlight');
setInterval(highlightWord, 1000);