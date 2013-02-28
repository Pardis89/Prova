/*
 * Nome:authentication.js
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
 */
 
 //definizione delle dipendenze
define([
 'jquery',
 'underscore',  
 'backbone',
 'text!templates/authentication.html'
], function($, _, Backbone, authenticationTemplate){
 var AuthenticationView = Backbone.View.extend({
//si occupa di legare gli eventi ad oggetti del DOM
	 events: {
      'click button#login': 'connect',
      'click button#logout': 'disconnect'
    },
//indica in quale parte del DOM gestirà 
  el: $("#authentication"),
  
  authenticationTemplate: _.template(authenticationTemplate),
//funzione di inizializzazione dell'oggetto
  initialize: function(){
    _.bindAll(this, 'render'); 
    this.render();
  },
//funzione che effettua la scrittura della struttura della pagina
  render: function() {
    $(this.el).html(this.authenticationTemplate({authenticated: false}))
    
  },
//funzione che si occupa della connessione col server
  connect: function(){
	  //esempio di come dovrebbe essere modificata la pagina dinamicamente
	  $(this.el).html(this.authenticationTemplate({authenticated: true, name: this.$("#user").val()}))
	  //dobbiamo aggiungere la parte di interfacciamento con il server
  },
 //funzione che si occupa di chiudere la sessione con il server
  disconnect: function(){
	  $(this.el).html(this.authenticationTemplate({authenticated: false}))
  }  
  
 });

 return AuthenticationView;
});
