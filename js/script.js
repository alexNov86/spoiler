document.addEventListener("DOMContentLoaded", (event) => {
  const articles = document.querySelectorAll(".block__item");
  articles.forEach((article) => {
    article.addEventListener("click", function (event) {
      const blockTitle = event.target;
      if (blockTitle.className.indexOf("block__title") == -1) return;
      const blockText = this.querySelector(".block__text");
      if (!blockText) return;
      // проверяем есть ли модификатор accordion, если есть то спойлер ведет себя как аккордеон
      const accordion = event.target.closest(".block_accordion");
      if (accordion) {
        const allBlockTitle = accordion.querySelectorAll(
          ".block__title.active"
        );
        const allBlockText = accordion.querySelectorAll(
          ".block__text.block__text_expanded"
        );
        blockTitle.classList.toggle("active");
        blockText.classList.toggle("block__text_expanded");
        if (allBlockTitle && allBlockText) {
          allBlockTitle.forEach((title) => title.classList.remove("active"));
          allBlockText.forEach((text) =>
            text.classList.remove("block__text_expanded")
          );
        }
      } else {
        blockTitle.classList.toggle("active");
        blockText.classList.toggle("block__text_expanded");
      }
    });
  });
});
