const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
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

// ciclo all'interno della mia array
for (let i = 0; i < team.length; i++) {
    const teams = team[i];
    console.log(teams);

    // ad ogni iterazione creao il markup che mi serve 
    const marKupName = `<div class="name">${teams.name}</div>`
    const markupRole = `<div class="role">${teams.role}</div>`
    const markupImage = `<div class="img">${teams.image}</div>`
    container.innerHTML += marKupName
    container.innerHTML += markupRole
    container.innerHTML += markupImage


}

