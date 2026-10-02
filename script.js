// Mobile navigation toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', toggleMenu);
}

// WhatsApp Form Integration
function handleFormSubmit(event) {
  event.preventDefault();

  // Get field values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const areaSelect = document.getElementById('area');
  const areaText = areaSelect.options[areaSelect.selectedIndex].text;
  const message = document.getElementById('message').value;

  // WhatsApp Destination Number
  const whatsappNumber = '553184775353';

  // Format message text
  const textMessage = `*Novo Contato via Site - Advocacia Mayer*

` +
                      `*Nome:* ${name}
` +
                      `*Telefone:* ${phone}
` +
                      `*E-mail:* ${email}
` +
                      `*Área de Interesse:* ${areaText}
` +
                      `*Mensagem:* ${message}`;

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

  // Show feedback & open WhatsApp
  const feedback = document.getElementById('formFeedback');
  if (feedback) {
    feedback.classList.remove('hidden');
  }

  window.open(whatsappUrl, '_blank');

  event.target.reset();

  setTimeout(() => {
    if (feedback) {
      feedback.classList.add('hidden');
    }
  }, 5000);
}
