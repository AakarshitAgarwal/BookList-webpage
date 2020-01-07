class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }

}
class UI{
    static displaybook(){
        const StoredBooks =[
            {
                title:'Book One',
                author:'John Doe',
                isbn:'1234'
            },
            {
                title:'Book two',
                author:'Aakarshit Agarwal',
                isbn:'5432'
            }
        ];

        const books=StoredBooks;
        // const books=Store.getBooks();
        console.log("hello"+books);
        console.log(typeof(books));
        // books.forEach((book)=>UI.addBookToList(book));
    }
}

// document.addEventListener('DOMContentLoaded',()=>{
//     //  console.log("hello"+books);
//      console.log(typeof(books));
       
    
//     // console.log("hi");
// })

document.addEventListener('DOMContentloaded',UI.displaybook());