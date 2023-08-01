const openChat = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const chatWidgetInput = document.getElementById('chat-widget__input');

openChat.addEventListener('click', () => {
  openChat.classList.add('chat-widget_active');
});

const botAnswers = [
  'То кто обзывается, сам так называется.',
  'Мне некогда, пишите потом.',
  'Вы кто? А я кто? Мы где?',
  'Спасибо нет.',
  'К сожалению, все операторы заняты. Прощайте.',
  'Где Ваша совесть?',
  'Мы ничего не будем Вам продавать'
];

document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
    messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${chatWidgetInput.value}</div>
      </div>
    `;
    chatWidgetInput.value = '';

    messages.innerHTML += `
      <div class="message">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${botAnswers[Math.floor(Math.random() * botAnswers.length)]}</div>
      </div>
    `;
  }
});