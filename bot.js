document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Har safar qiymatlarni yangidan oling
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('Contact-Message').value.trim();

  // Faqat hammasi to'ldirilganda yuboriladi va reset qilinadi
  fetch(`https://api.telegram.org/7526214683:AAF-px-S4wDzKOsxFS81sc1mGjropn4vtac/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      chat_id: '5228931975',
      text: `Ism: ${name}\nTelefon: ${phone} \nXabar: ${message}`,
      parse_mode: 'HTML',
    })
  }).then(() => {
    document.getElementById('contact-form').reset();
  });
});
