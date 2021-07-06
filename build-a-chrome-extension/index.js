let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");


function saveLead() {
    myLeads.push(inputEl.value);
    console.log(myLeads)
    inputEl.value = "";
    renderLeads();
}
function renderLeads() {
    let listItem = "";
    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i]);
        // const div = document.createElement('div');
        // // const li1 = document.createElement('li');
        // // li1.textContent = myLeads[i];
        // div.innerHTML = `<li>${myLeads[i]}</li>`;
        // // div.appendChild(li1);
        // ulEl.appendChild(div);

        // const li = document.createElement('li');
        // li.textContent = myLeads[i];
        // ulEl.appendChild(li);
        // listItem +="<li><a target="_blank" href='"+ myLeads[i]+"'>"+myLeads[i]+"</a></li>";
        listItem += `<li><a href=${myLeads[i]} target="_blank">${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItem;
}

