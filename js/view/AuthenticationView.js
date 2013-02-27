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
 'backbone',
 'jquery',
 'underscore',  
 'text!templates/AuthenticationTemplate.html'
], function($, _, Backbone, AuthenticationTemplate){
 var AuthenticationView = Backbone.View.extend({
  el: $('#header'),
  authenticationTemplate: _.template(AuthenticationTemplate),
  
  

 });

 return AuthenticationView;
});
