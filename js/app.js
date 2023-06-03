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

    billioniers.forEach(billoniar => {
        console.log(billoniar);
        //for table display
        const trEle = document.createElement('tr');

        //for normal display with image
        const createEle = document.createElement('col');
        const classlists = ['col-md-4'];
        createEle.classList.add(...classlists);

        //for table display
        trEle.innerHTML = `
        <td scope="row" class="d-flex justify-content-between">${billoniar.person.name} <button class="material-icons align-middle border-0 bg-white"  data-bs-toggle="modal" data-bs-target="#exampleModal">visibility</button></td>
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
          <button type="button" class="btn btn-success" >Show Details</button>
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

loadPeople()


// document.getElementById('v-pills-home-tab').addEventListener('click',function(){
//     const changeText = document.getElementById('v-pills-home');
//     changeText.innerHTML = `
//     <p>skfj skfjslk fkslfj slkfjsd lfsjf sf</p>
//     `
// })

// document.getElementById('v-pills-profile-tab').addEventListener('click',function(){
//     const changeText = document.getElementById('v-pills-profile');
//     changeText.innerHTML = `
//     <p>this is from profile tab we can change content successfully</p>
//     `
// })