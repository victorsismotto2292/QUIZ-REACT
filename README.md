# Quiz Interativo em React

## Sobre o projeto

Desenvolver um **Quiz Interativo utilizando React (JavaScript)** sobre um tema de livre escolha, como tecnologia, esportes, cultura geral, entre outros.

O projeto deverá utilizar os principais recursos de React trabalhados em aula, especialmente **componentes, props, `useState` e renderização condicional**.

---

## Requisitos obrigatórios

O Quiz deve possuir:

* Pelo menos **5 perguntas** de múltipla escolha.
* Cada pergunta deve possuir **4 alternativas**.
* Controle da pergunta atual e do progresso do usuário.
* Verificação da resposta selecionada.
* Contagem da pontuação.
* Exibição do resultado ao final do Quiz.
* Possibilidade de refazer o Quiz.

### Estrutura de cada pergunta

Cada pergunta deverá possuir:

```javascript
{
  id: 1,
  question: "Pergunta do quiz",
  options: [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D"
  ],
  correctAnswer: 1
}
```

O campo `correctAnswer` deve indicar o **índice da alternativa correta**.

---

## Estrutura de arquivos

O projeto deverá ser organizado da seguinte forma:

```text
src/
├── components/
│   ├── StartScreen.js
│   ├── Quiz.js
│   └── Results.js
│
├── data/
│   └── questions.js
│
├── App.js
└── App.css
```

---

## Componentes

### `StartScreen.js`

Responsável pela tela inicial do Quiz.

Deve conter:

* Título do Quiz.
* Botão para iniciar o Quiz.

Ao clicar no botão, o usuário deverá ser encaminhado para a primeira pergunta.

---

### `Quiz.js`

Responsável pela execução do Quiz.

Deve:

* Exibir a pergunta atual.
* Exibir as 4 alternativas.
* Permitir que o usuário selecione uma alternativa.
* Exibir o indicador de progresso no formato:

```text
Pergunta X de Y
```

* Possuir um botão **Próxima**.
* Verificar a resposta quando o usuário avançar.

---

### `Results.js`

Responsável pela tela de resultado.

Deve exibir:

* Quantidade de perguntas acertadas.
* Porcentagem de acertos.
* Botão para **refazer o Quiz**.

---

### `questions.js`

Deve armazenar o array contendo todas as perguntas do Quiz.

Exemplo:

```javascript
const questions = [
  {
    id: 1,
    question: "Qual Hook gerencia estado no React?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useRef"
    ],
    correctAnswer: 1
  }
];

export default questions;
```

O projeto deve possuir pelo menos **5 perguntas**.

---

### `App.js`

O `App.js` será responsável pelo gerenciamento do estado principal da aplicação utilizando `useState`.

Deve controlar:

* Pergunta atual.
* Pontuação.
* Resposta selecionada.
* Tela atualmente exibida.

O `App.js` também deverá utilizar **renderização condicional** para determinar qual componente será exibido:

```text
StartScreen
     ↓
   Quiz
     ↓
  Results
     ↓
  StartScreen
```

---

## Verificação das respostas

Quando o usuário clicar no botão **Próxima**, o sistema deverá verificar se a alternativa selecionada corresponde à resposta correta da pergunta.

Caso esteja correta:

```text
Pontuação +1
```

Caso esteja incorreta:

```text
Pontuação permanece igual
```

Depois da verificação, o Quiz deverá avançar para a próxima pergunta.

Ao finalizar todas as perguntas, o usuário deverá ser encaminhado para a tela de resultados.

---

## Estilização

O projeto deverá possuir uma interface estilizada utilizando `App.css`.

A interface deve apresentar:

* Layout centralizado.
* Botões estilizados.
* Alternativa selecionada com destaque visual.
* Organização clara das perguntas e respostas.
* Uma aparência consistente entre as telas.

---

## Criação do projeto

Para criar o projeto utilizando Create React App:

```bash
npx create-react-app meu-quiz
```

Depois, acessar a pasta:

```bash
cd meu-quiz
```

E iniciar o projeto:

```bash
npm start
```

---

# Extras — Pontos adicionais

Além dos requisitos obrigatórios, podem ser implementados recursos extras para obter até **+2,0 pontos**.

### Feedback imediato — +0,8

Ao selecionar uma alternativa, informar imediatamente ao usuário se a resposta está correta ou incorreta antes de avançar.

### Timer por pergunta — +1,0

Adicionar um limite de tempo para cada pergunta.

Exemplo:

```text
Tempo restante: 30s
```

A implementação deve utilizar `useState` e `setInterval`.

### Melhor pontuação — +0,6

Guardar a maior pontuação alcançada utilizando `localStorage` e exibi-la na tela inicial.

### Revisão de respostas — +0,8

Na tela de resultados, listar todas as perguntas indicando quais foram respondidas corretamente e quais foram respondidas incorretamente.

### Modo escuro — +0,5

Adicionar um botão para alternar entre tema claro e escuro e salvar a preferência do usuário.

### Barra de progresso — +0,4

Adicionar uma barra visual que avance conforme o usuário responde às perguntas.

---

## Fluxo esperado

```text
┌───────────────┐
│  Tela Inicial │
│               │
│    INICIAR    │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│     Quiz      │
│               │
│ Pergunta X/Y  │
│               │
│   ○ Opção A   │
│   ○ Opção B   │
│   ○ Opção C   │
│   ○ Opção D   │
│               │
│    PRÓXIMA    │
└───────┬───────┘
        │
        │ Última pergunta
        ▼
┌───────────────┐
│   Resultado   │
│               │
│   X / Y       │
│    XX%        │
│               │
│    REFAZER    │
└───────┬───────┘
        │
        └──────────────► Tela Inicial
```

## Critérios de avaliação

| Requisito                |  Pontos |
| ------------------------ | ------: |
| Array de perguntas       |     0,5 |
| `StartScreen.js`         |     0,5 |
| `Quiz.js`                |     1,0 |
| `Results.js`             |     0,5 |
| `useState` no `App.js`   |     1,0 |
| Verificação de resposta  |     0,5 |
| Renderização condicional |     0,5 |
| Estilização              |     0,5 |
| **Total**                | **5,0** |

### Pontos extras

| Extra                |   Pontos |
| -------------------- | -------: |
| Feedback imediato    |     +0,8 |
| Timer por pergunta   |     +1,0 |
| Melhor pontuação     |     +0,6 |
| Revisão de respostas |     +0,8 |
| Modo escuro          |     +0,5 |
| Barra de progresso   |     +0,4 |
| **Máximo de extras** | **+2,0** |
