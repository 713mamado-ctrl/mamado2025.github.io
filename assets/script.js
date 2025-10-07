document.querySelectorAll('.delete').forEach(btn => {
  btn.addEventListener('click', e => {
    const review = e.target.closest('.review');
    review.remove();
  });
});

document.querySelectorAll('.edit').forEach(btn => {
  btn.addEventListener('click', e => {
    const review = e.target.closest('.review');
    const p = review.querySelector('p');
    const newText = prompt('عدل تعليقك:', p.textContent);
    if(newText) p.textContent = newText;
  });
});
