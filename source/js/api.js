ymaps.ready(init);

function init()
{
  var myMap = new ymaps.Map("map",
  {
    center: [59.93863506417266, 30.323117499999945],
    zoom: 17,
    controls: ["zoomControl"]
  },

  {
    searchControlProvider: "yandex#search"
  });

  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(),
    {
      hintContent: "Собственный значок метки",
      balloonContent: "Метка на карте"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-35, -100]
    }),

    myMap.geoObjects.add(myPlacemark);
    map.behaviors.disable('multiTouch');
    map.behaviors.disable('scrollZoom');
};
