const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.linha").classList.remove("linha");
    item.classList.add("linha");
  });
});