'use strict';
class Question{

   constructor(content){
     this.content = content;
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }

  static All() {
   return this._All;
 }
 static FindById(index){
    return this.All().filter(function(question){
      return question. === id;
    })

}
Question._All = [];
