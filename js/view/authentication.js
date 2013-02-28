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
define([
 'jquery',
 'underscore',  
 'backbone',
 'text!templates/authentication.html'
], function($, _, Backbone, authenticationTemplate){
 var AuthenticationView = Backbone.View.extend({
	 
  el: $("#authentication"),
  
  authenticationTemplate: _.template(authenticationTemplate),
  
  initialize: function(){ 
    this.render();
  },
    
  render: function() {
	
    $(this.el).html(this.authenticationTemplate({authenticated: true, name: 'ago'}))
    
  }
    
 });

 return AuthenticationView;
});
