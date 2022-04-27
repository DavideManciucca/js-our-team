
const teamMembers = [
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: "img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },
 
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: "img/walter-gordon-office-manager.jpg"
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: "img/scott-estrada-developer.jpg"
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: "img/barbara-ramos-graphic-designer.jpg"
  },
];
const card = document.querySelector('.team-container');
startFunction();

function startFunction() {
 for(let i in teamMembers){
  outputCard(i)
 }
}

function outputCard(i) {
  card.innerHTML += 
 `
    <div class="team-card">
      <div class="card-image">
        <img
          src= ${teamMembers[i].foto}
          alt="${teamMembers[i].nome}"
        />
      </div>
      <div class="card-text">
        <h3>${teamMembers[i].nome}</h3>
        <p>${teamMembers[i].ruolo}</p>
      </div>
    </div>
 `; 
}