'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
};

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
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