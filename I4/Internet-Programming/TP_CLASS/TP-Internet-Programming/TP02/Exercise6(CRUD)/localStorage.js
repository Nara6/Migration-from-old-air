var books=[
    {'name': 'Book I1',
     'price': 100,
     'category': 'English'
    },
    {'name': 'Book I2',
     'price': 100,
     'category': 'English'
    },
     {'name': 'Book I3',
     'price': 100,
     'category': 'English'
    },
     {'name': 'Book I4',
     'price': 100,
     'category': 'English'
    },
     {'name': 'Book I5',
     'price': 100,
     'category': 'English'
    },
     {'name': 'Book I6',
     'price': 100,
     'category': 'English'
    }
];
function listing(){
    var index=0;
    document.getElementById('list').innerHTML="";
    books.forEach(book => {
        // console.log(book);
        document.getElementById('list').innerHTML += 
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
            console.log(index);
        index++;
    })
}
function addBook(){
    //add new object to json array
    let id = books.length;
    let name = document.getElementById('name').value;
    let category = document.getElementById('Category').value;
    let price = document.getElementById('Price').value;
    let book = {
        'name'      :   name,
        'category'  :   category,
        'price'     :   price
    };
    console.log(book.name);
    books.push(book);
    //list all object in array again 
    listing();
    // console.log(books);
}

function updateBook(index){
    var dialog = document.getElementById('updateDialog');    
    dialog.show();
    // document.getElementById('nameD').value =   
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
        books.splice(index, 1,book);
        // books.push(book);
        // localStorage.setItem("books", JSON.stringify(books));
        listing(); 
        //close dialog
        // dialog.close();
    }
}

// function getName(index){
//     var Index=0;
//     books.forEach(book=>{
//         if(Index==index){
//             return book.name;
//         }
//         Index++;
//     })
// }
// var name1 = getName(2);
// console.log(getName(2));

function deleteBook(index){
    books.splice(index,1);
    listing();
}
