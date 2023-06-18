let movies = [
  {
    name: "falcon and the winter soldier",
    des:
      "The Falcon and the Winter Soldier is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
    image: "images/slider2.png"
  },
  {
    name: "loki",
    des:
      "Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name.",
    image: "images/slider1.png"
  },
  {
    name: "wanda vision",
    des:
      "WandaVision is an American television miniseries created by Jac Schaeffer for the streaming service Disney+, based on Marvel Comics featuring the characters Wanda Maximoff / Scarlet Witch and Vision.",
    image: "images/slider3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya and the Last Dragon (.ə/ RYE-ə) is a 2021 American computer-animated fantasy action-adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures.",
    image: "images/slider4.png"
  },
  {
    name: "luca",
    des:
      "Luca is a 2021 American computer-animated coming-of-age fantasy film produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. The film was directed by Enrico Casarosa.",
    image: "images/slider5.png"
  }
];

//selecting carousal element from html
const carousel = document.querySelector(".carousal");
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating dom element
  let slide = document.createElement("div"); //slider
  let imgElement = document.createElement("img"); //img
  let content = document.createElement("div"); //slidecontent
  let h1 = document.createElement("h1"); //movie name
  let p = document.createElement("p"); //movie des

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-name";
  p.className = "movie-details";

  sliders.push(slide);
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}
//after every 3 seconds calling the func mane 3 sec por por slide ghurbe
setInterval(() => {
  createSlide();
}, 3000);

//for playing video
const videocards = [...document.querySelectorAll(".video-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});
// let cardContainers = [...document.querySelectorAll(".card-container")];
// let preBtns = [...document.querySelectorAll(".pre-btn")];
// let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

// cardContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtns[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth - 200;
//   });

//   preBtns[i].addEventListener("click", () => {
//     item.scrollLeft -= containerwidth + 200;
//   });
// });
