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
 'text!templates/ContactsTemplate.html',
 'view/FunctionsView'
], function($, _, Backbone, ContactsTemplate, FunctionsView){
 var ContactsView = Backbone.View.extend({
    template: _.template(ContactsTemplate),
    
    events:{
		"click li.contact" : "view"
	},
	
//Per ora rendo sempre visibili dei contatti:
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
	return this;
  },
// Su temp

	view : function(ContactModel){
		var fview= new FunctionsView({model: this.model});

	}

}); 
  return ContactsView;
});
