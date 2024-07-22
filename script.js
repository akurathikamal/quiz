document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const correctAnswer = 'D';
    options.forEach(option => {
        option.addEventListener('click', () => {
            if (option.getAttribute('data-answer') === correctAnswer) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
            options.forEach(opt => opt.style.pointerEvents = 'none');
        });
    });
});
