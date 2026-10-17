'use strict';
const moods = {
  silence: { title: 'Оставьте день пустым.', parts: ['Кофе на террасе. Телефон пока останется в комнате.', 'Книга, тень и длинная пауза между главами.', 'Проводить солнце у воды. Вернуться, когда захочется.'] },
  explore: { title: 'Следуйте за берегом.', parts: ['Выйти к воде пораньше, пока песок хранит ночную прохладу.', 'Пройти вдоль берега. Найти свой камень и посидеть у волн.', 'Вернуться на террасу с ветром в волосах и чашкой горячего чая.'] },
  together: { title: 'Побудьте ближе.', parts: ['Приготовить завтрак вдвоём и не убирать чашки слишком быстро.', 'Гулять без маршрута. Обсудить всё, на что не хватало времени.', 'Разделить ужин и посмотреть, как загораются первые звёзды.'] }
};
document.querySelectorAll('[data-mode]').forEach(button => {
  button.addEventListener('click', () => {
    const evening = button.dataset.mode === 'evening';
    document.body.classList.toggle('evening', evening);
    document.querySelectorAll('[data-mode]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('atmosphere-label').textContent = evening ? 'Солнце уходит. Море остаётся.' : 'Только вы, свет и горизонт.';
  });
});
document.querySelectorAll('[data-retreat]').forEach(button => {
  button.addEventListener('click', () => {
    const mood = moods[button.dataset.retreat];
    document.querySelectorAll('[data-retreat]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('itinerary-title').textContent = mood.title;
    document.querySelectorAll('#itinerary-list li p').forEach((paragraph, index) => { paragraph.textContent = mood.parts[index]; });
  });
});
