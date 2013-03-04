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
		_.bindAll(this, 'render'); 
		this.$el.html(this.template({logged: false}));		
	},

	render: function (){
		this.collection.fetch();
		$(this.el).html(this.template({logged: true}));
		this.viewContacts();
	},
	viewContact: function(ContactModel){
			var c = new ContactView({model: ContactModel});
			this.$("#contacts").append(c.render().el);
	},
		
	viewContacts: function(){
		this.collection.each(this.viewContact);
	},
	
	callIP:function(){
		var fview= new FunctionsView();
	},
    StartConference: function(){
		var fview= new FunctionsView();
	}
    
});
  return ContactsView;
});

