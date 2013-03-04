//FILE TEMPORANEO PER PROVA!!!!

define([
 'jquery',
 'underscore',  
 'backbone',
 'view/ContactView',
  'view/FunctionsView',
 'text!templates/ContactsTemplate.html'
], function($, _, Backbone, ContactView, FunctionsView,ContactsTemplate){
  var ContactsView = Backbone.View.extend({
    el: $("#sidebar"),
    template: _.template(ContactsTemplate),
    events:{
		'click button#callIP' : 'callIP'
	},
    initialize:function(){
		_.bindAll(this, 'render'); 
		this.$el.html(this.template({logged: false}));		
	},

	render: function (){
		this.collection.fetch();
		this.viewContacts();
	},
	viewContact: function(ContactModel){
			var c = new ContactView({model: ContactModel});
			this.$("#contacts").append(c.render().el);
			this.$('#sidebar').html(this.template({logged: true}));
	},
		
	viewContacts: function(){
		this.collection.each(this.viewContact);
	},
	
	callIP:function(){
		var fview= new FunctionsView();
	}
  
    
});
  return ContactsView;
});

