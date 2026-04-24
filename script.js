const projects = [
  {
    title: "BPG Store",
    description: "Sistema completo de gerenciamento de loja com controle de produtos, clientes e serviços.",
    tech: "Node.js • Express • MySQL • HTML • CSS",
    role: "Responsável pelo desenvolvimento do backend, criação de APIs REST, autenticação JWT e modelagem do banco de dados.",
    github: "https://github.com/Byelsantos11/BPG",
    image: "images/projeto1.png"
  },
  {
    title: "Projeto Aparecida",
    description: "Sistema para controle de viagens e passagens voltado para igrejas.",
    tech: "Java • Spring Boot • HTML • CSS",
    role: "Desenvolvimento do backend, estruturação do sistema e integração entre camadas.",
    github: "https://github.com/Deividteck/Pojeto-aparecida",
    image: "images/projeto2.png"
  },
  {
    title: "Loja de Brinquedos",
    description: "Aplicação web com funcionalidades completas de CRUD e integração com banco de dados.",
    tech: "Spring Boot • MySQL • JavaScript",
    role: "Implementação das funcionalidades CRUD e integração com banco de dados.",
    github: "https://github.com/Deividteck/loja-de-brinquedos",
    image: "images/projeto3.png"
  },
  {
    title: "Pizzaria",
    description: "Sistema web para gerenciamento de pedidos, produtos e clientes.",
    tech: "HTML • CSS • JavaScript",
    role: "Desenvolvimento completo do frontend e lógica de funcionamento.",
    github: "https://github.com/Deividteck/pizzaria",
    image: "images/projeto4.png"
  },
  {
    title: "Campo Minado",
    description: "Jogo clássico de lógica com geração dinâmica de tabuleiro.",
    tech: "JavaScript • HTML • CSS",
    role: "Desenvolvimento completo da lógica do jogo e interface.",
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