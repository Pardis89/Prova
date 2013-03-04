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
 'text!templates/ContactTemplate.html',
 'view/FunctionsView'
], function($, _, Backbone, ContactTemplate, FunctionsView){
 var ContactView = Backbone.View.extend({
    template: _.template(ContactTemplate),
    
    events:{
		"click li.contact" : "view"
	},
//Per ora rendo sempre visibili dei contatti:
  render: function(){
    this.$el.html(this.template({dom: this.options.dom, username: this.model.toJSON().username}));   
	return this;
  },
// Su temp
	view : function(ContactModel){
		var fview= new FunctionsView({model: this.model});
	}

}); 
  return ContactView;
});
