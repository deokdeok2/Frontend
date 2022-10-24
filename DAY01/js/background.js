const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage); //append 하면 맨뒤로감
                                    //prepend 하면 맨 앞으로 간다.




// const  images = ["0.jpg","1.jpg","2.jpg"];

// const chosenImage = images(Math.floor(Math.random()*images.length));

// console.log(chosenImage);

// const bgImage = document.createElement("img");

// console.log(bgImage)
// bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);