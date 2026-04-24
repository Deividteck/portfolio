const projects = [
  {
    title: "BPG Store",
    description: "Sistema completo de gerenciamento de loja com controle de produtos, clientes e autenticação JWT.",
    github: "https://github.com/Byelsantos11/BPG",
    image: "images/projeto1.png"
  },
  {
    title: "Projeto Aparecida",
    description: "Sistema para gerenciamento de viagens e passagens para igrejas.",
    github: "https://github.com/Deividteck/Pojeto-aparecida",
    image: "images/projeto2.png"
  },
  {
    title: "Loja de Brinquedos",
    description: "Aplicação web com CRUD completo e integração com banco de dados.",
    github: "https://github.com/Deividteck/loja-de-brinquedos",
    image: "images/projeto3.png"
  },
  {
    title: "Pizzaria",
    description: "Sistema web para gerenciamento de pedidos, produtos e clientes.",
    github: "https://github.com/Deividteck/pizzaria",
    image: "images/projeto4.png"
  },
  {
    title: "Campo Minado",
    description: "Jogo clássico com lógica de bombas e geração dinâmica.",
    github: "https://github.com/Deividteck/campo-minado",
    image: "images/projeto5.png"
  }
];

function showProject(index) {
  const project = projects[index];

  document.getElementById("details").innerHTML = `
    
    <div class="top-detail">
      <img src="images/minha-foto.png" class="avatar">
      <span>Deivid</span>
    </div>

    <h2>${project.title}</h2>

    <img src="${project.image}" class="project-image">

    <p>${project.description}</p>

    <a href="${project.github}" target="_blank">🔗 Ver no GitHub</a>
  `;
}