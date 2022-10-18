Array.prototype.size = function() {
  let counter = 0;
   this.map(el => counter++);
  return counter;
};
