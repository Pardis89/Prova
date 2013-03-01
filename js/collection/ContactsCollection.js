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
 'model/ContactModel'
], function($, _, Backbone, ContactModel){
  var ContactsCollection = Backbone.Collection.extend({
    model: ContactModel,
    
  });
  return new ContactsCollection;
});
