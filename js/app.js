const loadPeople = async() => {
    const url = 'https://forbes400.onrender.com/api/forbes400?limit=6';
    const res = await fetch(url);
    const data = await res.json();
    displayPeople(data);
    console.log(data);
    loadSpinner(true);

}

const displayPeople = (billioniers) => {
    //for table display
    const trwrap = document.getElementById('people-body-wrap');

    //for normal display with image
    const peopleWrap2 = document.getElementById('people-wrap2');
    trwrap.innerHTML = '';
    peopleWrap2.innerHTML = '';
    
    showTitle('allBillionaire');

    billioniers.forEach(billoniar => {
        //for table display
        const trEle = document.createElement('tr');
        
        //for normal display with image
        const createEle = document.createElement('col');
        const classlists = ['col-md-4'];
        createEle.classList.add(...classlists);

        //for table display
        trEle.innerHTML = `
        <td scope="row" class="d-flex justify-content-between">${billoniar.person.name} <button class="material-icons align-middle border-0 bg-white"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showinModal1(${billoniar})">visibility</button></td>
        <td>${billoniar.countryOfCitizenship}</td>
        <td>${billoniar.industries[0]}</td>
        <td>${billoniar.rank}</td>
        <td>$<span id="wealth-amount">${billoniar.archivedWorth}</span></td>
        `
        //for normal display with image
        createEle.innerHTML = `
        <div class="card">
        <img class="card-img-top" src="${billoniar.squareImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${billoniar.person.name}</h5>
          <p class="card-text"><b>Cityzenship: </b>${billoniar.countryOfCitizenship}</p>
          <p class="card-text"><b>Industry: </b>${billoniar.industries[0]}</p>
          <p class="card-text"><b>Rank: </b>${billoniar.rank}</p>
          <p class="card-text"><b>Wealth: </b>${billoniar.archivedWorth}</p>

          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">Show Details</button>
        </div>
      </div>
        `
        loadSpinner(false);
        //for table display
        trwrap.appendChild(trEle);

        //for normal display with image
        peopleWrap2.appendChild(createEle);

    });
}


//load by industry
const loadRichIndustry = async (searchText,industyRichest) => {
    const url = `https://forbes400.onrender.com/api/forbes400/industries/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    display(data,industyRichest);

}

const loadByStates = async (state,forTitle) => {
    const url = `https://forbes400.onrender.com/api/forbes400/states/${state}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    display(data,forTitle);
  
}


function display(data,forTitle){
    //for normal display with image
    const peopleWrap2 = document.getElementById('people-wrap2');
    //show title
    createTitle.innerText = '';
    const loasd = forTitle;
    if (loasd === 'bystates') {
        showTitle('bystates');
    }else{
        showTitle('industyRichest');
    }
    
    data.forEach(richByIndustry => {
        //for normal display with image
        const createEle = document.createElement('col');
        const classlists = ['col-md-4'];
        createEle.classList.add(...classlists);
        //for normal display with image
        createEle.innerHTML = `
        <div class="card">
        <img class="card-img-top" src="${richByIndustry.squareImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${richByIndustry.person.name}</h5>
          <p class="card-text"><b>Cityzenship: </b>${richByIndustry.countryOfCitizenship}</p>
          <p class="card-text"><b>Industry: </b>${richByIndustry.industries[0]}</p>
          <p class="card-text"><b>Rank: </b>${richByIndustry.rank}</p>
          <p class="card-text"><b>Wealth: </b>${richByIndustry.archivedWorth}</p>
       
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal2">Show Details</button>
        </div>
      </div>
        `
        
        //for normal display with image
        peopleWrap2.appendChild(createEle);
    });
}


//title show function
    //show title
    const titlewrap = document.getElementById('filter-wrap');
    const createTitle = document.createElement('h1');
function showTitle(category){

    if (category === 'industyRichest') {
        createTitle.innerText = 'Richest by Industry';
    }
    else if(category === 'bystates'){
        createTitle.innerText = 'Richest by Sates';
    }
    else{
        createTitle.innerText = 'Billionaires';
    }
    
    titlewrap.appendChild(createTitle);
}

//spiner load
const loadSpinner = (permission) => {
    const spinner = document.getElementById('spiner-load');
    if (permission === false) {
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none');
    }
}

//show 10 billioniar event handler
document.getElementById('v-pills-home-tab').addEventListener('click',function(){
    loadPeople()
});
loadPeople()

//serch by industry event handler
document.getElementById('v-pills-profile-tab').addEventListener('click',function(){
    loadRichIndustry('technology','industyRichest');
});


//serch by states event handler
document.getElementById('v-pills-messages-tab').addEventListener('click',function(){
    loadByStates('Texas','bystates');
});