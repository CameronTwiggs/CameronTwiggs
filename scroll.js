const nav = document.querySelector(".nav");
const main = document.querySelector("main");

const sectionOneOptions = {
  rootMargin: "200px"
};

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver) {
  entries.forEach(entry => {
      console.log(entry.isIntersecting);
    if (!entry.isIntersecting) {
        console.log("added");
      nav.classList.add("nav-scroll");
    } else {
        console.log("removed");
      nav.classList.remove("nav-scroll");
    }
  });
});

sectionOneObserver.observe(main);