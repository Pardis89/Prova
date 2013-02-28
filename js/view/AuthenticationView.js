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
 'text!templates/AuthenticationTemplate.html'
], function($, _, Backbone, AuthenticationTemplate){
 var AuthenticationView = Backbone.View.extend({
  el: $('#header'),
  authenticationTemplate: _.template(AuthenticationTemplate),
  
  

 });

 return AuthenticationView;
});
