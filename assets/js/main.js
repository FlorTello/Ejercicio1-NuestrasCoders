coders = [{name:'Andrea Cabrera', url : 'assets/img/andrea-cabrera.jpg'},{name:'Ariadna Izaguirre', url : 'assets/img/ariadna-izaguirre.jpg'},
          {name:'Carito Juarez ', url : 'assets/img/carito-juarez.jpg'},{name:'Cristy Castro', url : 'assets/img/cristy-castro.jpg'},
          {name:'Karol Orrillo', url : 'assets/img/karol-orrillo.jpg'},{name:'Paola Ortiz', url : 'assets/img/paola-ortiz.jpg'}
         ];
window.addEventListener('load',function(){
  var dfm = document.createDocumentFragment();
  var div = document.createElement('div');
  div.setAttribute('class','');
  for (var i = 0; i < coders.length; i++) {
    dfm.appendChild(crearImg(coders[i]));
  }
  document.getElementById('coders').appendChild(dfm);
});
function crearImg(coder){
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  img.setAttribute('src',coder.url);
  img.setAttribute('class','');
  img.setAttribute('alt',coder.name);
  var figcaption = document.createElement('figcaption');
  figcaption.setAttribute('class','');
  var span = document.createElement('span');
  span.textContent = coder.name;
  figcaption.appendChild(span);
  figure.appendChild(img);
  figure.appendChild(figcaption);
  return figure;
}
