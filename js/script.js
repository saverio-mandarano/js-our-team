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

// Seleziono elementi del form
const addMemberForm = document.getElementById(`add-member-form`);
const nameInput = document.getElementById(`name-new-member`);
const roleInput = document.getElementById(`role-new-member`);
const imageInput = document.getElementById(`image-new-member`);

// Aggiunto evento per aggiungere nuovo membro al submit
addMemberForm.addEventListener("submit", addMember);


// Funzioni

// Funzione per aggiungere un nuovo membro
function addMember(e){
  e.preventDefault();
  
}