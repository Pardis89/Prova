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

var AuthenticationCommunication = {
  
  //funzione per controllare se i dati di login sono presenti nel server
  checkCredentials: function(user, pass) {
	if ((!(user == ''))&&(!(pass == '')))
    return true;
  }
}
