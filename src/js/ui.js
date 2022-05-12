class UI {
  constructor() {
    this.profileSection = document.getElementById("profile");
  }

  showProfile(user) {
    this.profileSection.innerHTML = `
    <div
    class="container mx-auto w-5/6 md:5/6 2xl:w-1/2 bg-slate-800 mt-4 text-white rounded-t-lg p-4"
    >
    <div class="flex flex-none sm:flex-row">
      <div class="flex flex-col">
        <img
          src="${user.avatar_url}"
          alt=""
          class="rounded-t-md w-[200px] h-[200px]"
        />
        <a
          class="bg-slate-600 mt-2 rounded-b-md p-2 hover:bg-slate-900 w-[200px]"
          type="button"
          href="${user.html_url}"
          target="_blank"
          style="text-align:center"
        >
          View Profile
        </a>
      </div>
      <div class="flex flex-col pl-4 w-1/2 md:w-full">
        <div class="flex flex-row justify-between mt-4">
          <button
            class="bg-gradient-to-r from-blue-900 to-blue-600 p-1 rounded-md text-sm w-1/5"
          >
            Repos (0)
          </button>
          <button
            class="bg-gradient-to-r from-yellow-900 to-yellow-600 p-1 rounded-md text-sm w-1/5"
          >
            Gists (0)
          </button>
          <button
            class="bg-gradient-to-r from-red-900 to-red-600 p-1 rounded-md text-sm w-1/5"
          >
            Followers (0)
          </button>
          <button
            class="bg-gradient-to-r from-green-900 to-green-600 p-1 rounded-md text-sm w-1/5"
          >
            Following (0)
          </button>
        </div>
        <h1 class="text-[2rem] font-bold mt-4">${user.name}</h1>
        <h1 class="text-lg text-slate-500">${user.bio}</h1>
        <div class="mt-4">
          <h1 class="text-sm py-2 text-white">Company: ${user.company}</h1>
          <h1 class="text-sm py-2 text-white">Website: 
            <a href="${user.blog}" target="_blank">${user.blog}
          </h1>
          <h1 class="text-sm py-2 text-white">Member Since: ${user.created_at}</h1>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}
