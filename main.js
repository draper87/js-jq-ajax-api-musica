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
      creaDischi(dischi); // chiamo la funzione che richiama l API per generare il contenuto
      //
      $('button').click(function() {
        filtroGenere(dischi);
      })

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

  function filtroGenere(dischi) {
    $('.cds-container').html('');
    for (var i = 0; i < dischi.length; i++) {
      var singoloCd = dischi[i]; // metto in una variabile il singolo oggetto della array
      var genereMusicale = singoloCd.genre; // prendo il genere musicale dall api
      var genereSceltoDaUtente = $('#filtra-musica').val(); // prendo il genere musicale scelto dall utente
      if (genereMusicale === genereSceltoDaUtente) { // solo se il genere musicale scelto dall utente coincide con quello della canzone procedo con la visualizzazione del contenuto
        var source = $('#cd-template').html();
        var template = Handlebars.compile(source);
        var html = template(singoloCd);
        $('.cds-container').append(html);
      }

    }
  }

});
