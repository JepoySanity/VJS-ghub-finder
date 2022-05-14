const githubAPI = new GitHubAPI();
const ui = new UI();

const searchForm = document.getElementById("search_form");
const searchText = document.getElementById("search_text");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchKey = searchText.value;
  if (searchKey != "") {
    githubAPI.getUser(searchKey).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.showNotFound("User not found.");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        searchText.value = "";
      }
    });
  }
});
