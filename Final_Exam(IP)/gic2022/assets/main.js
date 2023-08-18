// 1. Define your class
class Recipe {
  name='';
  decription='';
  constructor(name, descriptions,chef,step){
    this.name = name;
    this.descriptions = descriptions;
    this.chef = chef;
    this.step = step;
  }
// 3. Validate your object
  validateName(){
    if(this.name===null || this.name===undefined){
      alert("Information is not enough")
    }
  }
  validateDescription(){
    if(this.name===null || this.name===undefined){
      alert("Information is not enough")

    }
  }
  validateChef(){
    if(this.name===null || this.name===undefined){
      alert("Information is not enough")
    }
  }
  validateStep(){
    if(this.name===null || this.name===undefined){
      alert("Information is not enough")
    }
  }
}

// 2. Initialize your object
var Recipe1 = new Recipe("Nara","Hello","test",["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?"]);
var Recipe2 = new Recipe("testing1","Hello","test",["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?"]);
var Recipe3 = new Recipe("testing2","Hello","test",["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?"]);
var Recipe4 = new Recipe("testing3","Hello","test",["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?"]);
var Recipe5 = new Recipe("testing4","Hello","test",["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repellat?"]);


// 4. Generate the template
function generateTemplate(){
  const content = document.getElementById("content");
  content.style.display = "block";
  content.style.textAlign = "left";
  content.style.marginTop = "10px";
  content.style.fontSize = "25px";
  document.getElementById("content").innerHTML=`${Recipe1.name} <div class="description">${Recipe1.descriptions}</div><div class="chef"> 
  ${Recipe1.chef} 
  </div>`;
  var step = document.getElementById("directions").innerHTML=`${Recipe1.step}`;
  // for (let i =0; i<Recipe1.step.length; i++) {
  //   step.innerHTML+=`<div>${Recipe1.step[i]}</div>`;
  //   console.log(Recipe1.step[i]);
  // }
  // console.log(Recipe1.step.length)
}
// 5. Create new object

function render() {
  console.log("render");
  // Generate your object ....
  // Hide button generate
  const buttonGenerate = document.getElementById("button-generate");
  buttonGenerate.style.display = "none";
  // Display template
  const recipeTemplate = document.getElementsByClassName("recipe")[0];
  recipeTemplate.style.display = "block";

  // const content = document.getElementById("content");
  // content.style.display = "block";
  // content.style.textAlign = "left";
  // content.style.marginTop = "10px";
  // content.style.fontSize = "25px";
  // document.getElementById("content").innerHTML=`${testing.name} <div class="description">${testing.descriptions}</div><div class="chef"> 
  // ${testing.chef} 
  // </div>`;
  // const step = document.getElementById("directions").innerHTML='hi';
  // for (let i =testing.step.length; i>=0; i--){
  //   step.innerHTML+=`<div>${testing.step[i]}</div>`;
  //   console.log(testing.step[i]);
  // }
  // console.log(testing.step.length)
  generateTemplate();
}

