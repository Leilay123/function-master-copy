//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
/**
 * I: function objectValues takes an object as a parameter
 * O: return the object as an array
 * C:
 * E:
 */
    return Object.values(object)
    // code
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
/**
 * I: function keysToString  take an object parameter
 * O: return the keys in the object and return a string
 * C: each key in string is seperated by a space
 * E:
 */

return Object.keys(object).join(" ")

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
/**
 * I: function valuesToString takes an object parameter
 * O: return the object values into a string
 * C: each value in string is seperated by a space
 * E:
 */
    
return Object.values(object).join(" ")

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
/**
 * I: function arrayOrObject takes collections as parameters
 * O: return if array is an array or if object is anb object
 * C:
 * E: takes one argument (array or object)
 */

if (Array.isArray(collection)){
    return "array"
} else if (typeof collection === 'object'){
    return "object"
}
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
/**
 * I: function capitalizeWord takes a string (which is one word)
 * O: retirm string with the first letter capitalize
 * C:
 * E:
 */

return string.split("")[0].toUpperCase() + string.slice(1)

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
/**
 * I: function capitalizeAllWords takes a string parameter
 * O: return all the words with the first letter caplizaed
 * C:
 * E:
*/

var words = string.split("");

for(var i = 0; i < words.length; i++){
     words[i][0].toUpperCase() + words[i].slice(1)
}
return words.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
/**
 * I: function welcomeMessagetakes an object (that as a name key/value)
 * O: return string that says "Welcome Name"
 * C: The name must be capilized
 * E:
 */

var name = Object.values(object)[0];

var capitalized = name.split("")[0].toUpperCase() + name.slice(1);
return "Welcome " + capitalized + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
/**
 * I: function profileInfo takes an object (with a name + species)
 * O: return a string that's <Name> is a <Spieces>
 * C: Both name and species need to be caplilized 
 * E:
 */

var nameObj = object.name // for the name

var species = object.speices; // for the speices

var capitalizedName = nameObj.split("")[0].toUpperCase() + nameObj.slice(1);

var capitalizedSpecies = species.split("")[0].toUpperCase() + species.slice(1);

return capitalizedName + " is a " + capitalizedSpecies

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
/**
 * I: function maybeNoises tajes an object (looking fot an noises array)
 * O: if object has noise array have noises, return an string w/ noises
 * if no noises array, return "there are no noises"
 * C:
 * E:
 */

if (Array.isArray(object.noises) && object.noises.length > 0){
    return object.noises.join(" ")
} else {
    return "there are no noises"
}

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
/**
 * I: function hasWord takes string (og words) and a word
 * O: return true if <word> is in <string of words>
 * if not, return false
 * C:
 * E:
 */

var wordCheck = string.split(" ");

for (var i = 0; i < wordCheck.length; i++) {
    
    if (wordCheck[i] === word) {
      return true;
    }
  }
  
  return false; 

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
/**
 * I: function addFriend take name and object
 * O: return the object with the added names in the friends array
 * C:
 * E:
 */

object.friends.push(name);
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
/**
 * I: function isFriend takes an name and object parameter
 * O: return true if name is in the friend object
 * if not return false
 * C:
 * E:
 */


for (var i = 0; i < object.friends.length; i++){
    if (name === object.friends[i]){
        return true
        
    }
}

return false

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
/**
 * I: function nonFriends take an name and an array (list of people)
 * O: return a list of names (array) that <name> is not friends with
 * C:
 * E:
 */

// maybe holding a place for the not friends array?
var nonFriends = []



}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
/**
 * I: function updateObject
 * O: 
 * C:
 * E:
 */
object[key] = value
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
/**
 * I: function removeProperties take an object and array (of strings)
 * O: function should remove any properties in object that are in the array
 * C:
 * E:
 */

for (var key in object){
    if (object.hasOwnProperty(key)){
        for(var i = 0; i < array.length; i++){
        if (array[i] === key) {
            delete object[key];
            break;
        }
     }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
/**
 * I: function dedup take an array parameter
 * O: function should return the array with all duplicates removed
 * C:
 * E:
 */

var noDups = []

for (var i = 0; i < array.length; i++){
    // how to check for duplicates?
    if (noDups.indexOf(array[i]) === -1){
        noDups.push(array[i])
    }
}
return noDups
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}