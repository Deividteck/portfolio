const projects = [
  {
    title: "BPG Store",
    description: "Sistema completo de gerenciamento de loja com controle de produtos, clientes e serviços.",
    tech: "Node.js, Express, MySQL, HTML, CSS",
    role: "Desenvolvi backend, autenticação JWT e banco de dados.",
    github: "https://github.com/Byelsantos11/BPG",
    image: "images/projeto1.png"
  },
  {
    title: "Projeto Aparecida",
    description: "Sistema de controle de viagens para igrejas.",
    tech: "Java, Spring Boot",
    role: "Desenvolvi backend e estrutura do sistema.",
    github: "https://github.com/Deividteck/Pojeto-aparecida",
    image: "images/projeto2.png"
  },
  {
    title: "Loja de Brinquedos",
    description: "Aplicação web com CRUD completo e banco de dados.",
    tech: "Spring Boot, MySQL",
    role: "Criei funcionalidades CRUD.",
    github: "https://github.com/Deividteck/loja-de-brinquedos",
    image: "images/projeto3.png"
  },
  {
    title: "Pizzaria",
    description: "Sistema de pedidos e gerenciamento de clientes.",
    tech: "HTML, CSS, JavaScript",
    role: "Desenvolvi frontend.",
    github: "https://github.com/Deividteck/pizzaria",
    image: "images/projeto4.png"
  },
  {
    title: "Campo Minado",
    description: "Jogo de lógica estilo minesweeper.",
    tech: "JavaScript",
    role: "Desenvolvi toda lógica do jogo.",
    github: "https://github.com/Deividteck/campo-minado",
    image: "images/projeto5.png"
  }
];

function showProject(i) {
  const p = projects[i];

  document.getElementById("details").innerHTML = `
    <h2>${p.title}</h2>
    <img src="${p.image}" class="project-image">
    <p>${p.description}</p>
    <p><strong>Tecnologias:</strong> ${p.tech}</p>
    <p><strong>Minha participação:</strong> ${p.role}</p>
    <a href="${p.github}" target="_blank">🔗 Ver no GitHub</a>
  `;
}