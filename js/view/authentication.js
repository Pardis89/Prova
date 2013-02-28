/*
 * Nome:untitled.js
 * Package: 
 * Autore:
 * Data:
 * Versione:
 * 
 * Modifiche:
 * +------+---------------+-----------+
 * | Data | Programmatore | Modifiche |
 * +------+---------------+-----------+
 * |      |               |           |
 */
define([
 'jquery',
 'underscore',  
 'backbone',
 'text!templates/authentication.html'
], function($, _, Backbone, authenticationTemplate){
 var AuthenticationView = Backbone.View.extend({
	 
  el: $("#header"),
  
  authenticationTemplate: _.template(authenticationTemplate),
  
  render: function() {
    $(this.el).html(this.authenticationTemplate({variabile:'blablabla'}));	 
    return this;    
  }
    
 });

 return AuthenticationView;
});
