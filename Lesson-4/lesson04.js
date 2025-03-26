  // titleProject (string)
  // creensValue (string)
  // screenPrice (num)
  // percentage (num)
  // fullPrice (num)
  //  (bool)

  // Исходные данные с урока №3 //
  let titleProject = "Оценка стоимости"
  console.log ("Название проекта:", titleProject);
  let screensValue = "шаблонные, с уникальным дизайном, с анимациями"
  console.log ("Типы экранов:", screensValue);
  let screenPrice = 8000
  console.log ("Цена за один экран:", screenPrice);
  let percentage = 20
  console.log ("Процент отката подрядчику:", percentage);

  // Урок №4 //
  // Задача 1: 
  titleProject = prompt("Название проекта?")
  console.log (titleProject);

  // Задача 2:
  let creensValue = prompt ("Типы экранов")
  console.log (creensValue);

  // Задача 3:
  let responsive = true
  prompt ("Нужен ли адаптивный сайт")
  console.log (responsive); 

  // Задача 4:
  let service1 = prompt ("Какой сервис нужен?")
  console.log ("Сервис:", service1);
  let servicePrice1 = Number(prompt("Сколько это будет стоить?"))
  console.log ("Стоимость:", servicePrice1);
  let service2 = prompt("Какой ещё сервис тебе нужен?")
  console.log ("Дополнительный сервис:", service2);
  let servicePrice2 = Number(prompt("Сколько будет стоить этот второй сервис"))
  console.log ("Стоимость второго сервиса:", servicePrice2);

  // Задача 5:
  let fullPrice = screenPrice + servicePrice1 + servicePrice2
  console.log ("Общая стоимость проекта:", fullPrice);

  // Задача 6:
  let servicePercentPrice = fullPrice - (fullPrice * percentage / 100); // 1080-(1080*20/100)=864 //итоговая сумму за вычетом процента
  console.log("Итогова сумма:", Math.round(servicePercentPrice));

  // Задача 7 (Условия):
  if (fullPrice > 50000) {
  console.log ("Скидка в 10%"); }
  if (50000 >= fullPrice >= 20000) {
  console.log ("Сделаем скидку 5%"); }
  else if (20000 > fullPrice > 0) {
    console.log ("Скидки нет"); }
    else if (fullPrice = 0) {
      console.log ("Стоимость равна нулю"); }
      else (fullPrice == 0) 
      console.log ("Что-то пошло не так")

  


