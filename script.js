document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const searchInput = document.getElementById("search-input");
  const posts = document.querySelectorAll("main article");
  /*Category filter*/
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /*Remove active class from all buttons*/
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      /*Add active to clicked button*/
      button.classList.add("active");
      const selectedCategory = button.getAttribute("data-category");
      posts.forEach((post) => {
        const postCategory = post.getAttribute("data-category");
        if (selectedCategory === "all" || selectedCategory === postCategory) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
  /*Search filter*/
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    posts.forEach((post) => {
      const text = post.innerText.toLowerCase();
      if (text.includes(searchTerm)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});
