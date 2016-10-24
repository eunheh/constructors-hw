function Dog (options) {
  let opts = options || {};
  this.status = opts.status = 'normal';
  this.color = opts.color = 'black';

  if (opts.hungry === false){
      this.hungry = false;
    } else {
      this.hungry = true;
    };

};

export { Dog };
