const tarefas = [
  {
    nome: "Implementar tela de listagem de tarefas",
    etiqueta: "frontend",
    data: "21/08/2024",
    concluida: false
  },
  {
    nome: "Criar endpoint para cadastro de tarefas",
    etiqueta: "backend",
    data: "21/08/2024",
    concluida: false
  },
  {
    nome: "Criar protótipo da listagem de tarefas",
    etiqueta: "ux",
    data: "21/08/2024",
    concluida: true
  }
];

function renderizarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const item = document.createElement("li");
    item.className = `tarefa ${tarefa.concluida ? "concluida" : ""}`;

    item.innerHTML = `
      <div>
        <p class="titulo">${tarefa.nome}</p>
        <div class="info">
          <span class="etiqueta">${tarefa.etiqueta}</span>
          Criado em: ${tarefa.data}
        </div>
      </div>
      ${
        tarefa.concluida
          ? `<button class="check">✔️</button>`
          : `<button class="concluir" onclick="concluirTarefa(${index})">Concluir</button>`
      }
    `;

    lista.appendChild(item);
  });

  atualizarContador();
}

function concluirTarefa(index) {
  tarefas[index].concluida = true;
  renderizarTarefas();
}

function atualizarContador() {
  const contador = document.getElementById("contador");
  const totalConcluidas = tarefas.filter(t => t.concluida).length;
  contador.textContent = `${totalConcluidas} tarefa${totalConcluidas !== 1 ? 's' : ''} concluída${totalConcluidas !== 1 ? 's' : ''}`;
}

document.getElementById("form-tarefa").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const etiqueta = document.getElementById("etiqueta").value.trim();

  if (!nome || !etiqueta) return;

  tarefas.push({
    nome,
    etiqueta,
    data: new Date().toLocaleDateString("pt-BR"),
    concluida: false
  });

  this.reset();
  renderizarTarefas();
});

renderizarTarefas();
