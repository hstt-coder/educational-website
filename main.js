// change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle(
    'window-scroll', window.scrollY > 0);
})

// toggle faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //change icon
    const icon = faq.querySelector('.faq__icon i');
    icon.className = icon.className === "uil uil-plus" ? "uil uil-minus" : "uil uil-plus"
  })
});