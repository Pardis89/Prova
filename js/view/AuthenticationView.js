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
 'communication/AuthenticationCommunication',
 'model/UserModel',
  'view/ContactsView',
], function($, _, Backbone, authenticationTemplate, AuthenticationCommunication,UserModel, ContactsView){
 var AuthenticationView = Backbone.View.extend({
//si occupa di legare gli eventi ad oggetti del DOM
	 events: {
      'click button#login': 'connect',
      'click button#logout': 'disconnect',
      'click button#dati':'visualizza'
    },
//indica in quale parte del DOM gestirà 
  el: $("#authentication"),
  cview: "",
  authenticationTemplate: _.template(authenticationTemplate),
//funzione di inizializzazione dell'oggetto
  initialize: function(){
    _.bindAll(this, 'render'); 
    this.render();
    cview = new ContactsView();
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
	  var answer=acomm.checkCredentials(user, pass);
	  if(answer.ans)
	  {
		 this.UserModel=new UserModel({
			    username: user,
				password: pass,
				name: answer.name,
				surname: answer.surname
			});
	    $(this.el).html(this.authenticationTemplate({authenticated: true, name: this.UserModel.toJSON().username}));

// visione dei contatti	
			cview.render();
		}
			  //dobbiamo aggiungere la parte di interfacciamento con il server
	 },

		
 //funzione che si occupa di chiudere la sessione con il server
  disconnect: function(){
	  $(this.el).html(this.authenticationTemplate({authenticated: false}))
	  cview.unrender();
  },
  visualizza: function(){
	  $(this.el).html(this.authenticationTemplate({authenticated: true, name: this.UserModel.get("password")}));
  }  
  
 });

 return AuthenticationView;
});


