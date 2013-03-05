/*
 * Nome:AuthenticationCommunication.js
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

define(function(){
	//classe che comunica con il server per i dati che riguardano il ricavare la lista dei contatti
	var ContactCommunication = function(collection){
	
	//metodo per ricevere i contatti
	ContactCommunication.prototype.fetchContacts = function() {
	  
		collection.create({username: 'Liquid90', 
			name: 'Giacomo', 
			surname: 'Bain', 
			IP:'0.0.0.3'});
		
	  					   
	};
  }
  return ContactCommunication;
});
