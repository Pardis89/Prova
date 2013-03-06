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
 'view/FunctionsView',
 'view/ChatView'
], function($, _, Backbone, ContactTemplate, FunctionsView, ChatView){
 var ContactView = Backbone.View.extend({
    template: _.template(ContactTemplate),
    
    
    
    events:{
		"click li.contact" : "view"
	},
	fview:'',
	fchat:'',
	initialize:function(){
		_.bindAll(this, 'render', 'view'); 
	},
//Per ora rendo sempre visibili dei contatti:
  render: function(){
    this.$el.html(this.template({dom: this.options.dom, username: this.model.toJSON().username}));   
	return this;
  },
// Su temp
	view : function(){
		if(this.fview=='')
		{
			this.fview=new FunctionsView({model:this.model});
			this.fchat=new ChatView({model:this.model});
		} else {
			this.fview.render();
			this.fchat.render();
			}
	}

}); 
  return ContactView;
});
