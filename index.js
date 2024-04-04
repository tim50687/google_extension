let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Store my lead to local storage
  let myLeadsString = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", myLeadsString);
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let lead of myLeads) {
    listItems += `<li><a target="_blank" href="https://${lead}">${lead}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}
