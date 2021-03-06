function init(ymaps) {
  var myMap = new ymaps.Map('map', {
      center: [34.87195183, -111.75626900],
      zoom: 7
  });

  var myPlacemark = new ymaps.Placemark(
    [34.87195183, -111.75626900], {
      hintContent: 'Седона Соединенные Штаты Америки, Аризона, Коконино-Каунти!',
      balloonContent: 'Добро пожаловать!'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon-map-marker.svg', // картинка иконки
        iconImageSize: [30, 30], // размер иконки
        iconImageOffset: [-15, -15] // позиция иконки
  });

  myMap.geoObjects.add(myPlacemark);
}
