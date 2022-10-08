const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = radial-gradient(red, rgb(87, 87, 221));
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "black";
    document.body.style.color = "#000101";
  }
});
