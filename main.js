// Attraverso una chiamata ajax all’Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.


$(document).ready(function() {

  $.ajax({
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data) {
      var dischi = data.response; // metto in una variabile la mia array di oggetti
      creaDischi(dischi);
    },
    error: function() {
      alert('errore');
    }
  })

  function creaDischi(dischi) {
    for (var i = 0; i < dischi.length; i++) {
      var singoloCd = dischi[i]; // metto in una variabile il singolo oggetto della array
      var source = $('#cd-template').html();
      var template = Handlebars.compile(source);
      var html = template(singoloCd); // passo a Handlebars il singolo oggetto
      $('.cds-container').append(html); // con ciclo for vado ad appendere ogni elemento contenuto nel mio array di oggetti nel html
    }
  }

});
