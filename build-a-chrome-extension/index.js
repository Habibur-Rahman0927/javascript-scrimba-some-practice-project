let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
// let myLeads = `["https://www.google.com/"]`;//string this arrary
// console.log(myLeads);// output this is a string
// myLeads = JSON.parse(myLeads);//string converting to array 
// myLeads.push("Habib");//string don't push  || but now this is array we can push anythings
// console.log(myLeads); // output this is an array
// myLeads = JSON.stringify(myLeads); // now array to strings converting
// console.log(myLeads)// output is string

// myLeads = JSON.parse(myLeads)
// localStorage.setItem("myLeads", "https://www.google.com/");
// console.log(localStorage.getItem("myLeads"));

// const tabs = [
//     { url: "http://127.0.0.1:5500/index.html" }
// ]
tabBtn.addEventListener('click', () => {
    // chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    //     let url = tabs[0].url;
    //     // use `url` here inside the callback because it's asynchronous!
    // });
    // console.log(tabs[0].url);
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        myLeads.push(url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })

})


let leadsFromLoacalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLoacalStorage) {
    myLeads = leadsFromLoacalStorage;
    render(myLeads);
}
else {
    ulEl.style.color = "#5f9341";
    ulEl.innerText = "No Leads here"
}

deleteBtn.addEventListener('dblclick', () => {
    // console.log("clicked");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads);
})

// function saveLead() {
//     myLeads.push(inputEl.value);
//     console.log(myLeads)
//     inputEl.value = "";
//     renderLeads();
// }
function render(leads) {
    let listItem = "";
    for (let i = 0; i < leads.length; i++) {
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
        listItem += `<li><a href=${leads[i]} target="_blank">${leads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItem;
}

