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
 'underscore',  
 'backbone',
 'storage', 
 'model/ContactModel'
], function( _, Backbone, Store, ContactModel){
  var ContactsCollection = Backbone.Collection.extend({

    model: ContactModel,
 //PER ORA LO METTO NEL LOCAL STORAGE SOTTO IL NAMESPACE MyTalk
	localStorage: new Store("MyTalk")
    
 });
  return new ContactsCollection();
});
