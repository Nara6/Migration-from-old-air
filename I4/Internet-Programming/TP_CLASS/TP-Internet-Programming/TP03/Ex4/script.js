
var books = [
    {
        'name'      :   'C programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'C++ programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'C# programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'Java programming',
        'category'  :   'programming',
        'price'     :   '50000'
    },
    {
        'name'      :   'JavaScript programming',
        'category'  :   'programming',
        'price'     :   '50000'
    }

];

if(localStorage.getItem("books")===null){
    localStorage.setItem("books",JSON.stringify(books));
}


var books = JSON.parse(localStorage.getItem("books"));

//listing
function listing(){
    //index for delete or update function and it must in listing funtion because it is represent to index ot array
    var index = 0;
    //clear the display on list_book div so it not display overloading when call listing again
    document.getElementById('list_book').innerHTML = "";
    //list all objects that exist in json array 
    books.forEach(book => {
        // console.log(book);
        document.getElementById('list_book').innerHTML += 
            `<div class="item">
                <div class="button" >
                    <button onclick="deleteBook(${index});">Delete</button>
                    <button onclick="updateBook(${index});">Change name</button>
                </div>
                <div class="image">
                    <img src="https://img.icons8.com/ios-glyphs/512/open-book--v1.png" alt="Book-logo" width="50%">
                </div>
                <div class="book_info">
                    <span>Name: ${book?.name}</span><br>
                    <span>Price: ${book?.price} riels</span><br>
                    <span>Category: ${book?.category}</span>
                </div>
            </div>`;
            // console.log(index);
        index++;
    })
}

//add book
function addBook(){
    //add new object to json array
    let id = books.length;
    let name = document.getElementById('name').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let book = {
        'name'      :   name,
        'category'  :   category,
        'price'     :   price
    };
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books));
    //list all object in array again 
    listing();
    // console.log(books);
}

//update book
function updateBook(index){
    //popup dialog box
    var dialog = document.getElementById('updateDialog');    
    dialog.show();    
    document.getElementById('hide').onclick = function() {    
        dialog.close();    
    };
    document.getElementById('submit').onclick = function() {
        //get data from dialog
        let name = document.getElementById('nameD').value;
        let category = document.getElementById('categoryD').value;
        let price = document.getElementById('priceD').value;
        let book = {
            'name'      :   name,
            'category'  :   category,
            'price'     :   price
        };
        // delete and insert back updated data
        books.splice(index, 1, book);
        localStorage.setItem("books", JSON.stringify(books));
        listing(); 
        //close dialog
        dialog.close();
    }
}

//delete book
function deleteBook(index){
    books.splice(index,1);
    localStorage.setItem("books", JSON.stringify(books));
    listing();
}

    

    