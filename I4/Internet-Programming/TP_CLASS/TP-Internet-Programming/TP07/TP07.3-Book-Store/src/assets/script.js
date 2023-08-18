const listBook = document.getElementById("list_book");
    function listing(){
        fetch("https://jsonplaceholder.typicode.com/photos").then(async (res)=>{
            const data = await res.json();
            // console.log(data[1].title);
            
            for(let i=0; i<100; i++){
                var template = `<div style="display: flex; flex-direction: column; background-color: white; padding:10px; gap:5px">
                <img style="width: 150px; height:150px" src="${data[i].thumbnailUrl}">
                <div>${data[i].title}</div><div>Album Id: ${data[i].albumId}</div>
                <div>Category: ${data[i].albumId}</div>
                <div><a id="link" href="http://localhost:3000/detail?id=${data[i].id}" target="_blank">See</a></div>
                </div>`
                listBook.innerHTML += template;
            }

        })
    }
    function display(){
        id=parseInt(document.URL.split("id=")[1]);
        fetch(`http://jsonplaceholder.typicode.com/photos/${id}`).then(async (response)=>{
            const data = await response.json();
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("albumId").innerHTML = data.albumId;
            document.getElementById("catId").innerHTML = data.albumId;
            document.getElementById("thumbnail").src = data.thumbnailUrl;
        }).finally(()=>{
            document.getElementById("res").hidden =false;
        })
    }
