document.addEventListener("DOMContentLoaded", () => {
  const actions = {
    length: () => alert("Length Conversion"),
    area: () => alert("Area Conversion"),
    speed: () => alert("Speed Conversion"),
    weight: () => alert("Weight Conversion")
  };

  document.querySelectorAll(".item").forEach((el) => {
    const type = el.getAttribute("data-type");
    if (actions[type]) {
      el.addEventListener("click", actions[type]);
    }
  });
});
