let button = document.getElementsByTagName("button");
let input = document.querySelector("input");
let loading = true;
let hold,
  is_busy,
  change = 0,
  click = null;
for (let i = 0; i < button.length; ++i) {
  button[i].onmousedown = function (e) {
    var text = this.getAttribute("but_text").split(""),
      number = this.getAttribute("but_number");
    loading = true;
    clearTimeout(is_busy);
    if (click !== e.target) {
      loading = false;
    }
    // console.log("FIRST CHNGE", { change });
    // console.log({ click });
    if (change >= text.length - 1 || click !== e.target) {
      change = 0;
      click = e.target;
    } else {
      change = change + 1;
      console.log({ change });
    }
    hold = setTimeout(function () {
      input.value = input.value.slice(0, -1) + number;
      // console.log("INPUT.VALUE", input.value);
    }, 1000);
    input.value = loading
      ? input.value.slice(0, -1) + text[change]
      : input.value + text[change];
  };
  button[i].onmouseup = function (e) {
    clearTimeout(hold);
    loading = true;
    // console.log("E.TARGET", e.target);
    is_busy = setTimeout(function () {
      change = 0;
      loading = false;
      e.target = null;
    }, 1000);
  };
}
