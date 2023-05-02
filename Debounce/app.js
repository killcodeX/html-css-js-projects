let lowerBody = document.querySelector(".lower-body");
let input = document.querySelector(".input-user");
let totalUser = [];

const fetchUsers = async () => {
  try {
    let data = await fetch("https://randomuser.me/api/?results=50");
    let userData = await data.json();

    userData.results.map((item) => {
      let li = document.createElement("div");

      li.classList.add("user-card");

      totalUser.push(li);

      li.insertAdjacentHTML(
        "afterbegin",
        `
          <div class='user-data'>
            <img src=${item.picture.thumbnail} alt=${item.name.first}/>
            <div>
            <p>${item.name.first + " " + item.name.last}</p>
            </div>
          </div>
        `
      );
      lowerBody.append(li);
    });
  } catch (error) {
    console.error(error);
  }
};

function debounce(callback, interval) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args)
    }, interval);
  };
}

function filter(val) {
  totalUser.filter((item) => {
    item.innerText.toLowerCase().includes(val.toLowerCase())
      ? item.classList.remove("hide")
      : item.classList.add("hide");
  });
}

const debounced = debounce(filter, 1000);

input.addEventListener("input", (e) => {
  let val = e.target.value;
  debounced(val);
});

fetchUsers();
