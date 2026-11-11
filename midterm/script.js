const menus = {
  breakfast: ["蛋餅", "鐵板麵", "飯糰", "吐司"],
  lunch: ["排骨便當", "牛肉麵", "咖哩飯", "水餃"],
  dinner: ["火鍋", "義大利麵", "燒肉", "炒飯"],
  drinks: ["CoCo都可", "清心福全", "茶之魔手", "麻古茶坊", "迷客夏", "可不可熟成紅茶", "得正", "八曜和茶", "龜記茗品"]
};

const topic = document.getElementById("topic");
const menuList = document.getElementById("menu-list");
const spinButton = document.getElementById("spin-button");
const result = document.getElementById("result");

function showMenu() {
  const selectedMenu = menus[topic.value];
  menuList.innerHTML = "";

  for (let i = 0; i < selectedMenu.length; i++) {
    const item = document.createElement("li");
    item.textContent = selectedMenu[i];
    menuList.appendChild(item);
  }

  result.textContent = "選擇結果會顯示在這裡";
}

function chooseFood() {
  const selectedMenu = menus[topic.value];
  const randomNumber = Math.floor(Math.random() * selectedMenu.length);
  result.textContent = "今天就選：" + selectedMenu[randomNumber];
}

topic.addEventListener("change", showMenu);
spinButton.addEventListener("click", chooseFood);

showMenu();
