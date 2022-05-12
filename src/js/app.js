const searchForm = document.getElementById("search_form");
const searchText = document.getElementById("search_text");

searchForm.addEventListener("submit", (e) => {
  if (searchText.value != "") {
    console.log(searchText.value);
  }
});
