const projects = [
  {
    title: "BPG Store",
    description: "Sistema completo de gerenciamento de loja.",
    tech: "Node.js, Express, MySQL",
    role: "Desenvolvi backend e autenticação JWT.",
    github: "https://github.com/Byelsantos11/BPG",
    image: "images/projeto1.png"
  },
  {
    title: "Projeto Aparecida",
    description: "Sistema de viagens para igrejas.",
    tech: "Java, Spring Boot",
    role: "Backend e estrutura.",
    github: "https://github.com/Deividteck/Pojeto-aparecida",
    image: "images/projeto2.png"
  },
  {
    title: "Loja de Brinquedos",
    description: "CRUD completo com banco.",
    tech: "Spring Boot, MySQL",
    role: "Integração e CRUD.",
    github: "https://github.com/Deividteck/loja-de-brinquedos",
    image: "images/projeto3.png"
  },
  {
    title: "Pizzaria",
    description: "Sistema de pedidos.",
    tech: "HTML, CSS, JS",
    role: "Frontend completo.",
    github: "https://github.com/Deividteck/pizzaria",
    image: "images/projeto4.png"
  },
  {
    title: "Campo Minado",
    description: "Jogo de lógica.",
    tech: "JavaScript",
    role: "Lógica do jogo.",
    github: "https://github.com/Deividteck/campo-minado",
    image: "images/projeto5.png"
  }
];

function showProject(i) {
  const p = projects[i];

  const details = document.getElementById("details");
  details.style.opacity = 0;

  setTimeout(() => {
    details.innerHTML = `
      <div class="top-detail">
        <img src="images/minha-foto.png" class="avatar">
        <span>Deivid</span>
      </div>

      <h2>${p.title}</h2>

      <img src="${p.image}" class="project-image">

      <p>${p.description}</p>
      <p><strong>Tecnologias:</strong> ${p.tech}</p>
      <p><strong>Participação:</strong> ${p.role}</p>

      <a href="${p.github}" target="_blank">🔗 Ver no GitHub</a>
    `;
    details.style.opacity = 1;
  }, 200);
}