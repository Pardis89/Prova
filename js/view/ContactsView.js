//FILE TEMPORANEO PER PROVA!!!!

define([
 'jquery',
 'underscore',  
 'backbone',
 'view/ContactView',
  'view/FunctionsView',
 'text!templates/ContactsTemplate.html',
 'collection/ContactsCollection'
], function($, _, Backbone, ContactView, FunctionsView,ContactsTemplate, ContactsCollection){
  var ContactsView = Backbone.View.extend({
    el: $("#sidebar"),
    template: _.template(ContactsTemplate),
    collection: ContactsCollection,
    events:{
		'click button#callIP' : 'callIP',
		'click button#conference' : 'StartConference'
	},
    initialize:function(){
		_.bindAll(this, 'render', 'unrender'); 
		this.$el.html(this.template({logged: false}));		
	},

	render: function (){
		this.collection.fetch();
		$(this.el).html(this.template({logged: true}));
		this.viewContacts();
	},
	unrender: function (){
		this.collection.fetch();
		$(this.el).html(this.template({logged: false}));
		this.destroyContacts();
		var pippo;
		var fview= new FunctionsView({Form: pippo});
	},
	viewContact: function(ContactModel){
			var c = new ContactView({dom : "sidebar", model: ContactModel});
			this.$("#contacts").append(c.render().el);
	},
		
	viewContacts: function(){
		this.collection.each(this.viewContact);
		
	},
	destroyContacts: function(){
		this.collection.each(this.destroyContact);
		
	},
	
	destroyContact: function(ContactModel){
			var c = {model: ContactModel};
			c.model.destroy();
	},
	
	callIP:function(){
		var fview= new FunctionsView({From: "IP"});
	},
    StartConference: function(){
		var fview= new FunctionsView({From: "Conf"});
	}
    
});
  return ContactsView;
});

