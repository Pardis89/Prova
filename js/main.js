/*
 * Nome:main.js
 * Package: 
 * Autore:
 * Data:
 * Versione:
 * 
 * Modifiche:
 * +------+---------------+-----------+
 * | Data | Programmatore | Modifiche |
 * +------+---------------+-----------+
 * |      |               | Scrittura codice          |
 * |      |               | Inserite require  con le tre classi view iniziali |
*/
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',
    text: 'libs/require/text'
  },
  
  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    }
  }

});

require(['view/AuthenticationView'/*, 'view/ContactsView'*/], function(AuthenticationView/*, ContactsView*/){
  var aview = new AuthenticationView();
//  var cview = new ContactsView();

});

