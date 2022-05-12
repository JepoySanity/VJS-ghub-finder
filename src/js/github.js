class GitHubAPI {
  constructor() {
    this.apiURL = "https://api.github.com/users";
  }

  async getUser(user) {
    const getUserInfo = await fetch(`${this.apiURL}/${user}`);
    const getUserInfoRes = await getUserInfo.json();

    return {
      profile: getUserInfoRes,
    };
  }
}
