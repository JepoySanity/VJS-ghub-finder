class GitHubAPI {
  constructor() {
    this.apiURL = "https://api.github.com/users";
    this.repoCount = 5;
    this.repoSorter = "created: asc";
  }

  async getUser(user) {
    const getUserInfo = await fetch(`${this.apiURL}/${user}`);
    const getUserInfoRes = await getUserInfo.json();

    const getUserRepos = await fetch(
      `${this.apiURL}/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSorter}`
    );
    const getUserReposRes = await getUserRepos.json();

    return {
      profile: getUserInfoRes,
      repos: getUserReposRes,
    };
  }
}
