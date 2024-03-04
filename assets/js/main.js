const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: '/assets/img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: '/assets/img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: '/assets/img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: '/assets/img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: '/assets/img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: '/assets/img/barbara-ramos-graphic-designer.jpg',
    },

];
//MILESTONE 1:
// Stamapre su console le informazioni di nome ruole e la stringa della foto 

// for (let i = 0; i < team.length; i++) {
//     const teams = team[i];
//     console.log(teams);

// }



// MILESTONE 2:
// Stampare a schermo tramite un ciclo for tutte le informazioni dell'oggetto


// recupero l'elemento della dom
let container = document.getElementById(`container`)

 //ciclo all'interno della mia array
// for (let i = 0; i < team.length; i++) {
//     const teams = team[i];
//     console.log(teams);

//     // ad ogni iterazione creao il markup che mi serve 
//     const marKupName = `<div class="name">${teams.name}</div>`
//     const markupRole = `<div class="role">${teams.role}</div>`
//     const markupImage = `<div class="img"> <img src="${teams.image}" alt="">
//     </div>`
//     container.innerHTML += marKupName
//     container.innerHTML += markupRole
//     container.innerHTML += markupImage
// }


// Bonus trasformare la stringa foto in un'immagine effettiva
// - cambiare url dell'immagine sull'arraay di oggeti
// - cambiare il markup al ciclo





// Bonus formare una card per ogni persona del team
// recupero l'elemento row dalla dom
let rowElement = document.querySelector(`.row`);

//ciclo all'interno dell'array
for (let i = 0; i < team.length; i++) {
    const rowTeam = team[i];
    //inserisco il markup per ogni sezione 
    const markup = ` <div class="col">
    <div class="card"> <h2>${rowTeam.name}</h2><h5>${rowTeam.role}</h5> <img src="${rowTeam.image}"alt="">
        
    </div></div>`
    
//aggiungo gli elementi in pagina
    rowElement.insertAdjacentHTML(`beforeend`, markup)
    
}