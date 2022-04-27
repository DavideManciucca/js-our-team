const teamGroup = [
  {
    nome:'Angela Caroll',
    role:'chief editor',
    photo:  "our-team-base\img\angela-caroll-chief-editor.jpg"
  },
  {
    nome:'Angela Lopez',
    role:'social media manager',
    photo: " our-team-base\img\angela-lopez-social-media-manager.jpg"
  },
  {
    nome:'Barbara Ramos',
    role:'grapich desiner',
    photo: " our-team-base\img\barbara-ramos-graphic-designer.jpg"
  },
  {
    nome:'Scott Estrada',
    role:'web developer',
    photo: "our-team-base\img\scott-estrada-developer.jpg"
  },
  {
    nome:'Walter Gordon',
    role:'office manager',
    photo: "our-team-base\img\walter-gordon-office-manager.jpg"
  },
  {
    nome:'Wayne Barnett',
    role:'founder ceo',
    photo: "our-team-base\img\wayne-barnett-founder-ceo.jpg"
  },
];

let card = document.getElementById('team-container');

startFunction();

function startFunction(){
  for(let i in teamGroup){
   const output= 
    ` <div class="team-card">
    <div class="card-image">
      <img
        src="${teamGroup[i].photo}"
        alt="${teamGroup[i].nome}"
      />
    </div>
    <div class="card-text">
      <h3>${teamGroup[i].nome}</h3>
      <p>${teamGroup[i].role}</p>
    </div>
  </div> `;
  document.getElementById('team-contaimner').innerHTML += output;
  }
}

