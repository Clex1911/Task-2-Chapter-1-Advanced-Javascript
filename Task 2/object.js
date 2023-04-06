let book = {
    author: "John Red Doe",
    title: "Mr.RED has a red and a green car",
    images: {
         url: "https://dummy.com/red-image.jpg",
    }
};

let mybook = JSON.stringify(book);

console.log(mybook.replaceAll(/red/gi, "Blue"));

// console.log(book.images);
// let result = mybook.replaceAll(/red/gi, "blue");
// const {author, title, images} = book1;