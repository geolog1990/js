'use strict';
function Post(author, text, date) {
    this.author = author,
    this.text = text,
    this.date = date;
};
Post.prototype.edit = function(text) {
    this.text = text;
};
function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};
let p1 = new Post('Artur', 'Post comment', '17/08/1990');
p1.edit('Another post comment');
console.log(p1);
let p2 = new AttachedPost('Ivan', 'Attached comment', '12.09.2012');
console.log(p2);
p2.edit('Another attached comment');
console.log(p2);
p2.makeTextHighlighted();
console.log(p2);