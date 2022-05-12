const githubAPI = new GitHubAPI();

const searchForm = document.getElementById("search_form");
const searchText = document.getElementById("search_text");

searchForm.addEventListener("submit", (e) => {
  const searchKey = searchText.value;
  if (searchKey != "") {
    githubAPI.getUser(searchKey).then((data) => {
      if (data.profile.message === "Not Found") {
        alert("Not Found");
      } else {
        alert(`${data.profile.name}`);
      }
    });
  }
});
