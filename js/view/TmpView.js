//FILE TEMPORANEO PER PROVA!!!!

define([
 'jquery',
 'underscore',  
 'backbone',
 'view/ContactsView',
], function($, _, Backbone, ContactsView){

  var TmpView = Backbone.View.extend({
    el: $("#sidebar"),
    
    initialize:function(){
		_.bindAll(this, 'render'); 
//		this.render();
		this.collection.fetch();
		this.viewContacts();

	},

	viewContact: function(ContactModel){
			var c = new ContactsView({model: ContactModel});
			this.$("#contacts").append(c.render().el);
	},
		
	viewContacts: function(){
		this.collection.each(this.viewContact);
	},
//"Creo la lista contatti in locale" sarà da mettere nel AuthenticationView e da prendere i dati dal server
	newAttributes: function() {
      return {
			username: 'Liquid90', 
			name: 'Giacomo', 
			surname: 'Bain', 
			IP:'0.0.0.2'
		};
    },

	render: function(){
		this.collection.create(this.newAttributes());
	}
	
    
});
  return TmpView;
});
