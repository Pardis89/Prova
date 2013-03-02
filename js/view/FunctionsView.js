/*
 * Nome: FunctionsView.js
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
 
//definizione delle dipendenze
define([
 'jquery',
 'underscore',  
 'backbone',
 'text!templates/FunctionTemplate.html'
], function($, _, Backbone, FunctionTemplate){
  var FunctionView = Backbone.View.extend({
  
//si occupa di legare gli eventi ad oggetti del DOM
    events:{
		'click button#startChat':'startChat',
		'click button#sendVideoText':'sendVideoText',
		'click button#call':'call',
		'click button#video':'video',	
		'click input#record' : 'record'
	},

//indica in quale parte del DOM gestirà 
    el: $("#content"),
    contact:"",
    template: _.template(FunctionTemplate),
    
//funzione di inizializzazione dell'oggetto
  initialize: function(contact){
    _.bindAll(this, 'render'); 
    this.render();
  },
  
 //funzione che effettua la scrittura della struttura della pagina
  render: function() {
		$(this.el).html(this.template(this.model.toJSON()))
  }
});
return FunctionView;

});
