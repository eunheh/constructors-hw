function Person (options) {
  let opts = options || {};

  if (opts.cool === true){
      this.cool = true;
    } else {
      this.cool = false;
    };

};

Person.prototype.pet = function (dog) {
   dog.status = 'happy';
}

Person.prototype.feed = function (dog) {
   dog.hungry = false;
}

Person.prototype.owner = {};


export { Person };
