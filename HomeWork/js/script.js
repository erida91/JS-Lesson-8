// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

document.addEventListener('DOMContentLoaded', function () {
  let element = document.querySelector('[data-widget-name]');
  let value = element.getAttribute('data-widget-name');
  console.log(value); // Виведе "menu"
});
