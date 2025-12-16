const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Seleziono elementi
const addMemberForm = document.getElementById(`add-member-form`);
const nameInput = document.getElementById(`name-new-member`);
const roleInput = document.getElementById(`role-new-member`);
const imageInput = document.getElementById(`image-new-member`);
const emailInput = document.getElementById(`email-new-member`);

const teamContainer = document.getElementById(`team-container`);


// Aggiunto evento per aggiungere nuovo membro al submit
addMemberForm.addEventListener("submit", addMember);

// Chiamo funzione per renderizzare le cards
renderTeam(teamMembers, teamContainer);


// Funzioni

// Funzione per aggiungere un nuovo membro
function addMember(e){
  e.preventDefault();

  const name = nameInput.value;
  const role = roleInput.value;
  const img = imageInput.value;
  const email = emailInput.value;
  
  // Creo il nuovo membro come oggetto
  const newMember = {
    name,
    role,
    img,
    email
  }
  
  // Aggiungo il nuovo membro all'array di oggetti
  teamMembers.push(newMember);

  // Form reset
  addMemberForm.reset();

  // Chiamo funzione per aggiornare renderizzazione carte
  renderTeam(teamMembers, teamContainer);

}





// Funzione per renderizzare le card
function renderTeam(members, container) {
  container.innerHTML = ``; // svuota il contenitore

  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const card = `
      <div class="c-card d-flex">
        <div class="c-card-img w-25">
          <img src="${member.img}" class="card-img-top" alt="${member.name}">
        </div>
        <div class="c-card-text w-75 bg-black text-white">
          <ul>
            <li>${member.name}</li>
            <li>${member.role}</li>
            <li class="mt-2"><a href="mailto:${member.email}">${member.email}</a></li>
          </ul>
        </div>
      </div>
    `;
    container.innerHTML += card;
  }
}

