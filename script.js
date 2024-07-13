var arr = [
  {
    username: "Babita kumari",
    dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1717701315033-492b4c8b0d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Beedi vaale uncle",
    dp: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1720649718712-dff5514d5534?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Sweeti kumari",
    dp: "https://images.unsplash.com/photo-1495462911434-be47104d70fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1720692739658-ee952b1aebb1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Lovely Kumari",
    dp: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1720462813863-cf94aef89b38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Babita kumari",
    dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1717701315033-492b4c8b0d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
];

var post = [
  {
    username: "",
    image: "",
    likesCount: "",
    isLiked: false,
  },
  {
    username: "",
    image: "",
    likesCount: "",
    isLiked: false,
  },
  {
    username: "",
    image: "",
    likesCount: "",
    isLiked: false,
  },
  {
    username: "",
    image: "",
    likesCount: "",
    isLiked: false,
  },
  {
    username: "",
    image: "",
    likesCount: "",
    isLiked: false,
  },
];


// Puttingg arr data into frontend using forEach loop and clutter

var clutter = "";

arr.forEach(function (elem, idx) {
  clutter =
    clutter +
    `<div class="story">
                    <img id=${idx} src="${elem.dp}" alt="">
                </div>`;
});

var storiyan = document.querySelector("#storiyan");
storiyan.innerHTML = clutter;

//  array ka data feed ho chuka hai.

var full = document.querySelector("#full");
var fullUserName = document.querySelector("#full h5")
var fullUserDP = document.querySelector(".userDetails img")
var growth = document.querySelector("#growth")





var grow = 0

// parent (storiyan) par click karke uske childs par hamko effect dikhana hai

// first 'dets' nikalenge then 'dets.target' then 'dets.target.id' then 'arr[dets.target.id]'

// selected user ki details like dp, story and username kisi variable ke andar save karna hai 

// jo story hai use full div ke ander as a backgroundImage laga denge 

// setTimeout ki help se thodi der baad hata denge 


storiyan.addEventListener("click", function (dets) {
  var userStory = arr[dets.target.id].story;
  var userName = arr[dets.target.id].username;
  var userDP = arr[dets.target.id].dp
  

  full.style.display = "block";
  full.style.backgroundImage = `url(${userStory})`;
  fullUserName.innerHTML = userName
  fullUserDP.setAttribute("src",userDP)

  var storyInterval = setInterval(function(){
        grow++
        console.log(grow)
        growth.style.width = grow+"%"
  },30)

  setTimeout(function () {
    full.style.display = "none";
    clearInterval(storyInterval)
    grow = 0
  }, 3000);



});