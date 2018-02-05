'use strict';
class Question{
 Question._All.push(this)

  static All() {
   return this._All;
 }

}
Question._All = [];
