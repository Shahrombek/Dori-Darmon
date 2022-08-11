const parent = document.querySelector("#parent");

var pos = 0,
  eventHandler = 1;

const scrollTab = (e) => {
  if (e === "top" && eventHandler > 1) {
    pos += 100;
    eventHandler -= 1;
    parent.style.transform = `translateY(${pos}px)`;
  } else if (e === "down" && eventHandler < 2) {
    pos -= 100;
    eventHandler += 1;
    parent.style.transform = `translateY(${pos}px)`;
  }
};
