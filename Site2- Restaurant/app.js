const filter = (button) => {
  let category = button.getAttribute("data-category");
  let portfolioItems = document.querySelectorAll(".menu-card2");
  console.log(portfolioItems);
  portfolioItems.forEach((item) => {
    item.style.display = "none";
  });

  if (category === "sve") {
    portfolioItems.forEach((item) => {
      item.style.display = "grid";
    });
  }
  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "grid";
    }
  });
};

const nazad = document.querySelector(".nazad");

nazad.addEventListener("click", function () {
  let options = "";
  let ref = window.open("index.html", "_self", options);
});
