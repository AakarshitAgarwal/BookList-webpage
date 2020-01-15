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

static addBookToList(Book){

    const list = document.querySelector("#book-list")';
    

}
static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement('tr');  //tr is just like books row heading
    row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
                `;
    list.appendChild(row);   //btn btn-danger btn-sm delete is used to create red box over the cross sign

}
// document.addEventListener('DOMContentLoaded',()=>{
//     //  console.log("hello"+books);
//      console.log(typeof(books));
       
    
//     // console.log("hi");
// })

document.addEventListener('DOMContentloaded',UI.displaybook());
document.querySelector('#book-form').addEventListener('submit', (e) => {
