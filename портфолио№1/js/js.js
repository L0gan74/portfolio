let block = $(".figma ,.bootstrap ,.vscode");
let button = $(".open button");
let slided = 0;

button.on("click", () => {
  if (slided == 0) {
    block.slideUp();
    slided = 1;
    } else {
    block.slideDown();
    slided = 0;
    }
});

