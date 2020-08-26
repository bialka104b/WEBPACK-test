//plik do sekcji z BABELEM
export default class {
  constructor(element) {
    this.element = document.createElement("div"); //tworzymy div
    this.element.style.height = "100px"; //zmieniamy wysokość na 100px
    document.body.appendChild(this.element); //dodajemy div do naszego body
  }

  color = "cadetblue";//do obsługi tego potrzebny jest dodatkowy plugin o nazwie @babel/plugin-propsal-class-properties
  addBg_color(color = this.color) {//jak nie ma podanego koloru to korzytaj z this.color
    this.element.style.backgroundColor = color;
  }
  showColor = () => {//funkcja która pokaże nam kolor jakiegoś elementu
    console.log(this.element.style.backgroundColor);
  }
}
