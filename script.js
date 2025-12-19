// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação ao rolar
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// WhatsApp com mensagem automática
const whatsappBtn = document.getElementById('whatsappBtn');

if (whatsappBtn) {
  const message = encodeURIComponent(
    'Olá! Vi seu site e gostaria de um site profissional para meu salão.'
  );
  whatsappBtn.href = `https://wa.me/5511999999999?text=${message}`;
}
