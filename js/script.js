document.addEventListener("DOMContentLoaded", (event) => {
  // const allTitle = document.querySelectorAll(".block__title");
  // // Обвертывем текстовый элемент в span
  // for (let title of allTitle) {
  //   let span = document.createElement("span");
  //   title.prepend(span);
  //   span.append(span.nextSibling);
  // }
  const articles = document.querySelectorAll(".block__item");
  articles.forEach((article) => {
    article.addEventListener("click", function (event) {
      const blockTitle = event.target;
      if (blockTitle.className.indexOf("block__title") == -1) return;
      const blockText = this.querySelector(".block__text");
      if (!blockText) return;
      blockTitle.classList.toggle("active");
      blockText.classList.toggle("block__text_expanded");
    });
  });
});
