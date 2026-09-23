document.querySelector(".sun").addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  // نتحقق من اللون الحالي ونبدله
  const isDark = document.body.dataset.dark === "true";

  if (!isDark) {
    document.body.style.background = "black";
    const paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "#dabdbd";
    }
const span = document.getElementsByTagName("span");
    for (var i = 0; i < span.length; i++) {
      span[i].style.color = "#dabdbd";
    }

    document.body.dataset.dark = "true";
  } else {
    document.body.style.background = "#ffffff";
    const paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "#690000";
    }

    const span = document.getElementsByTagName("span");
    for (var i = 0; i < span.length; i++) {
      span[i].style.color = "#2b22db";
    }
    document.body.dataset.dark = "false";
  }
}