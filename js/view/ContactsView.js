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
 'text!templates/ContactsTemplate.html'
], function($, _, Backbone, ContactsTemplate){
 var ContactsView = Backbone.View.extend({
	TagName: 'li',
    template: _.template(ContactsTemplate),
    
    event:{
		"click div.contact" : "view"
	},
//Per ora rendo sempre visibili dei contatti:
  initialize: function(){
    _.bindAll(this, 'render'); 
    this.render();
  },
  render: function() {
    $(this.el).html(this.template({username: 'ago'}))
  },
// Su temp

	view:function(){
		var fview= new FunctionView('giacomino');
	}
}); 
  return ContactsView;
});
