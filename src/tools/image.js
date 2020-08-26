import photo from "../images/forest.jpg";
//import mouse from "../images/mouse.jpg";
export default (tag) => {
  const img = document.createElement("img");
  img.src = photo;
  document.querySelector(tag).appendChild(img);
};
