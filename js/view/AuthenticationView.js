/*
 * Nome:AuthenticationView.js
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
 'text!templates/AuthenticationTemplate.html',
 'communication/AuthenticationCommunication'
], function($, _, Backbone, authenticationTemplate, AuthenticationCommunication){
 var AuthenticationView = Backbone.View.extend({
//si occupa di legare gli eventi ad oggetti del DOM
	 events: {
      'click button#login': 'connect',
      'click button#logout': 'disconnect',
      'click button#dati':'visualizza'
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
	  var user = this.$("#user").val();
	  var pass = this.$("#password").val();
	  var acomm = new AuthenticationCommunication();
	  var risposta=acomm.checkCredentials(user, pass);
	  if(risposta.ans)
	  {
		  alert(this.model.get('username'));
		 this.model.set({
			    username: user,
				password: pass,
				name: risposta.nome,
				surname: risposta.cognome
			});
	    $(this.el).html(this.authenticationTemplate({authenticated: true, name: this.UserModel.get("username")}));
		
		}
	  //dobbiamo aggiungere la parte di interfacciamento con il server
  },
 //funzione che si occupa di chiudere la sessione con il server
  disconnect: function(){
	  $(this.el).html(this.authenticationTemplate({authenticated: false}))
  },
  visualizza: function(){
	  $(this.el).html(this.authenticationTemplate({authenticated: true, name: this.UserModel.get("password")}));
  }  
  
 });

 return AuthenticationView;
});


