
# 🧩 TP1 e TP2 – Sistema de Controle de Tarefas Pessoais (To-Do List)

## TP1 – Definição do Problema e Planejamento Inicial

### 🎯 Objetivo
Desenvolver uma aplicação web simples para **gerenciamento de tarefas pessoais**, permitindo que o usuário cadastre, visualize, edite e conclua tarefas de forma prática.  
O sistema busca ajudar pessoas a **organizar suas atividades diárias** de maneira intuitiva e acessível.

---

### 🧠 Problema
Muitas pessoas têm dificuldade em organizar suas tarefas do dia a dia e acabam esquecendo compromissos ou perdendo prazos.  
Embora existam várias ferramentas, muitas são complexas ou exigem login.  
Assim, há necessidade de uma **solução simples, leve e sem dependências externas**, que funcione diretamente no navegador.

---

### 💻 Tipo de Solução
Será desenvolvida uma **aplicação web (To-Do List)** com foco em simplicidade e praticidade.  
O usuário poderá:
- Adicionar novas tarefas;
- Marcar tarefas como concluídas;
- Editar e remover tarefas;
- Visualizar o progresso diário.

Os dados serão salvos **localmente no navegador (LocalStorage)**, dispensando backend ou banco de dados.

---

### ✅ Requisitos Funcionais
| ID | Requisito | Descrição |
|----|------------|------------|
| RF01 | Adicionar tarefa | O usuário pode criar uma nova tarefa informando um título. |
| RF02 | Marcar tarefa como concluída | O usuário pode marcar/desmarcar uma tarefa como feita. |
| RF03 | Editar tarefa | O usuário pode alterar o nome de uma tarefa. |
| RF04 | Excluir tarefa | O usuário pode remover tarefas da lista. |
| RF05 | Armazenar tarefas localmente | As tarefas devem ser salvas no LocalStorage do navegador. |
| RF06 | Exibir contagem de tarefas | O sistema mostra quantas tarefas estão pendentes e concluídas. |

---

### ⚙️ Requisitos Não Funcionais
| ID | Requisito | Descrição |
|----|------------|------------|
| RNF01 | Usabilidade | A interface deve ser simples, limpa e intuitiva. |
| RNF02 | Compatibilidade | O sistema deve funcionar nos principais navegadores modernos. |
| RNF03 | Desempenho | As ações devem ocorrer instantaneamente (sem recarregar a página). |
| RNF04 | Persistência local | As tarefas devem ser mantidas mesmo após recarregar a página. |

---

### 📊 Diagrama de Caso de Uso (texto)
```
Ator: Usuário

Casos de Uso:
 - Adicionar tarefa (RF01)
 - Marcar tarefa como concluída (RF02)
 - Editar tarefa (RF03)
 - Excluir tarefa (RF04)
 - Exibir contagem de tarefas (RF06)
 - Salvar tarefas localmente (RF05)

Relacionamentos:
Usuário -> Adicionar tarefa
Usuário -> Marcar tarefa concluída
Usuário -> Editar tarefa
Usuário -> Excluir tarefa
Usuário -> Visualizar contagem
```

---

### 🧱 Estrutura Sugerida do Repositório
```
📁 to-do-list
├── 📂 docs
│   ├── TP1.md
│   ├── TP2.md
│   ├── requisitos.md
│   └── testes.md
├── 📂 src
│   ├── index.html
│   ├── style.css
│   └── script.js
├── 📂 videos
├── README.md
└── LICENSE
```

---

### 🗂️ GitHub Projects (Planejamento)
**Colunas sugeridas:**

- **Project Backlog**
  - RF01: Criar nova tarefa  
  - RF02: Marcar tarefa como concluída  
  - RF03: Editar tarefa  
  - RF04: Excluir tarefa  
  - RF05: Salvar tarefas no navegador  
  - RF06: Exibir contagem de tarefas  

- **TODO (Sprint TP2)**
  - Escolher tecnologias e arquitetura  
  - Criar protótipo simples da interface  
  - Configurar estrutura inicial do projeto  
  - Documentar arquitetura (TP2)

---

## 🏗️ TP2 – Projeto de Software

### 🧩 Escolhas de Tecnologias
| Camada | Tecnologia | Justificativa |
|---------|-------------|----------------|
| Frontend | **HTML5, CSS3 e JavaScript Puro** | Permite construir uma aplicação simples e funcional sem necessidade de frameworks. |
| Armazenamento | **LocalStorage (navegador)** | Mantém dados persistentes de forma leve e sem servidor. |
| Implantação | **GitHub Pages** | Permite hospedar o projeto gratuitamente e acessá-lo via navegador. |

---

### 🧠 Arquitetura da Solução (C4 Model Simplificado)

#### 🔹 Nível 1 – Contexto
O sistema “To-Do List” permite que o **usuário organize suas tarefas diárias** em uma interface web leve e prática.  
Os dados são armazenados localmente e não há necessidade de login.

**Atores:**
- **Usuário:** interage com a interface para criar, editar e concluir tarefas.  
- **Sistema:** registra e exibe as tarefas, salvando-as no navegador.

---

#### 🔹 Nível 2 – Containers
| Container | Tecnologia | Função |
|------------|-------------|--------|
| **Interface Web (Frontend)** | HTML + CSS + JS | Responsável por toda a lógica e interface. |
| **LocalStorage** | Nativo do navegador | Armazena as tarefas e o status de conclusão. |

Fluxo:
1. Usuário acessa a página web.  
2. O JavaScript carrega as tarefas do LocalStorage.  
3. O usuário adiciona, edita ou remove tarefas.  
4. As alterações são salvas automaticamente.

---

#### 🔹 Nível 3 – Componentes
**Principais componentes (JS):**
- `taskManager.js`: gerencia a lista de tarefas (adicionar, remover, editar).  
- `storageHandler.js`: lê e grava dados no LocalStorage.  
- `uiController.js`: atualiza a interface e eventos de botão.

**HTML Estruturado:**
- `<input>` para digitar a tarefa.  
- `<button>` para adicionar.  
- `<ul>` exibindo as tarefas.  
- Contador de tarefas pendentes/concluídas.

---

### 💬 Justificativa do Modelo
A arquitetura foi pensada para **máxima simplicidade e clareza**, permitindo que o código seja facilmente entendido e evoluído.  
O uso de **HTML, CSS e JS puro** elimina dependências externas e facilita o aprendizado dos conceitos básicos de front-end e persistência local.  

---

### 📅 Planejamento da Próxima Sprint (TP3)
**Objetivo do TP3:** Criar o primeiro protótipo funcional da aplicação.

**Atividades planejadas:**
- Implementar estrutura HTML e CSS (layout simples).  
- Adicionar funcionalidade de adicionar tarefa (RF01).  
- Implementar exclusão e marcação de tarefa concluída (RF02 e RF04).  
- Salvar e carregar dados via LocalStorage (RF05).  
- Atualizar GitHub Projects com progresso e próximos passos.
