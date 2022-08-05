document.addEventListener("DOMContentLoaded", (event) => {
  // const allTitle = document.querySelectorAll(".block__title");
  // // Обвертывем текстовый элемент в span
  // for (let title of allTitle) {
  //   let span = document.createElement("span");
  //   title.prepend(span);
  //   span.append(span.nextSibling);
  // }
  const articles = document.querySelectorAll(".block__item");
  let 
  articles.forEach((article) => {
    article.addEventListener("click", function (event) {
      const blockText = this.querySelector(".block__text");
      if (!blockText) return;
      this.classList.toggle("active");
      blockText.style.display = "block";
    });
  });
});
