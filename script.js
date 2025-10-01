// Variáveis do Jogo
let players = [];
let currentPlayerIndex = 0;
let diceRoll = 0;
let winnersCount = 0; // Nova variável para contar os jogadores que venceram
const specialCells = {
    1: 'V', 2: 'P', 3: 'M', 4: 'E', 5: 'V',
    6: 'M', 7: 'P', 8: 'V', 9: 'E', 10: 'V',
    11: 'P', 12: 'M', 13: 'V', 14: 'E', 15: 'P',
    16: 'V', 17: 'M', 18: 'E', 19: 'V', 20: 'P',
    21: 'M', 22: 'V', 23: 'P', 24: 'V', 25: 'E',
    26: 'M', 27: 'V', 28: 'P', 29: 'M'
};

const questions = [
    // --- PERGUNTAS DE PREVENÇÃO (P) ---
    {
        type: "P",
        text: "Onde o mosquito da dengue gosta de colocar os ovos?",
        options: ["Na areia da praia", "Em água parada", "Na terra seca", "No lixo seco"],
        answer: "Em água parada"
    },
    {
        type: "P",
        text: "Para evitar mosquito, o que devemos fazer com garrafas vazias?",
        options: ["Guardar de boca para baixo", "Deixar no quintal cheias de água", "Jogar fora em qualquer lugar", "Deixar abertas"],
        answer: "Guardar de boca para baixo"
    },
    {
        type: "P",
        text: "Qual dessas coisas pode virar criadouro de mosquito?",
        options: ["Copo descartável jogado no chão", "Lata de refrigerante aberta", "Pneu no quintal com água da chuva", "Todas as opções"],
        answer: "Todas as opções"
    },
    {
        type: "P",
        text: "Usar repelente ajuda a:",
        options: ["Matar o mosquito", "Evitar a picada", "Acabar com as larvas", "Limpar a pele"],
        answer: "Evitar a picada"
    },
    {
        type: "P",
        text: "O mosquito pica mais em que horário?",
        options: ["De madrugada", "Meio-dia", "Manhã e fim da tarde", "Só à noite"],
        answer: "Manhã e fim da tarde"
    },
    {
        type: "P",
        text: "Como evitar que vasos de planta criem mosquito?",
        options: ["Jogando sal", "Colocando areia no pratinho", "Deixando água acumulada", "Regando sem parar"],
        answer: "Colocando areia no pratinho"
    },
    {
        type: "P",
        text: "Por que é importante tampar a caixa d’água?",
        options: ["Para economizar água", "Para não virar criadouro de mosquito", "Para não estragar a tampa", "Para não chover dentro"],
        answer: "Para não virar criadouro de mosquito"
    },
    {
        type: "P",
        text: "Quem deve cuidar para não deixar água parada?",
        options: ["Só a prefeitura", "Só os vizinhos", "Todo mundo", "Só os agentes de saúde"],
        answer: "Todo mundo"
    },
    {
        type: "P",
        text: "Qual atitude está errada?",
        options: ["Colocar lixo em sacos fechados", "Guardar pneus cobertos", "Deixar garrafas de cabeça para cima", "Limpar calhas"],
        answer: "Deixar garrafas de cabeça para cima"
    },
    {
        type: "P",
        text: "O mosquito pode nascer em:",
        options: ["Piscina limpa e com cloro", "Balde de água esquecido no quintal", "Água corrente de rio", "Torneira com vazamento"],
        answer: "Balde com água da chuva"
    },
    {
        type: "P",
        text: "Uma tampinha de garrafa com água é suficiente para:",
        options: ["Nada acontecer", "Virar criadouro de mosquito", "Afastar insetos", "Secar rápido"],
        answer: "Virar criadouro de mosquito"
    },
    {
        type: "P",
        text: "Quem já teve dengue precisa se cuidar de novo?",
        options: ["Não, nunca mais pega", "Sim, pode pegar outro tipo", "Só se viajar", "Só se não usar repelente"],
        answer: "Sim, pode pegar outro tipo"
    },
    {
        type: "P",
        text: "O que devemos fazer em época de chuva?",
        options: ["Esquecer do mosquito", "Redobrar os cuidados com água parada", "Tomar mais sol", "Fechar portas"],
        answer: "Redobrar os cuidados com água parada"
    },
    {
        type: "P",
        text: "O mosquito vive mais em:",
        options: ["Lixo seco", "Água parada", "Poeira", "Areia da rua"],
        answer: "Água parada"
    },
    {
        type: "P",
        text: "O que acontece se não limpar calhas entupidas?",
        options: ["Estraga o telhado", "Junta água e cria mosquito", "Aumenta a conta de luz", "Nada"],
        answer: "Junta água e cria mosquito"
    },
    {
        type: "P",
        text: "O fumacê sozinho resolve o problema?",
        options: ["Sim, totalmente", "Não, só ajuda", "Não serve para nada", "Dura para sempre"],
        answer: "Não, só ajuda"
    },
    {
        type: "P",
        text: "Quem mora em apartamento precisa se prevenir?",
        options: ["Sim, porque mosquito voa até lá", "Não, só casas têm risco", "Só quem mora no térreo", "Só quem tem varanda"],
        answer: "Sim, porque mosquito voa até lá"
    },
    {
        type: "P",
        text: "O mosquito pode nascer em qual dessas coisas?",
        options: ["Balde com água da chuva", "Copo com água", "Pratinho de planta", "Todas as opções"],
        answer: "Todas as opções"
    },
    {
        type: "P",
        text: "Qual dessas atitudes está certa?",
        options: ["Usar telas nas janelas", "Jogar lixo na rua", "Guardar pneus cheios de água", "Deixar caixa d’água aberta"],
        answer: "Usar telas nas janelas"
    },
    {
        type: "P",
        text: "Se todo mundo fizer sua parte contra o mosquito, teremos:",
        options: ["Mais casos de doença", "Menos casos de doença", "Igual número de casos", "Nada muda"],
        answer: "Menos casos de doença"
    },
    
    // --- PERGUNTAS DE VACINA (V) ---
    {
        type: "V",
        text: "Existe vacina contra qual dessas doenças?",
        options: ["Dengue e febre amarela", "Zika", "Todas as três", "Nenhuma"],
        answer: "Dengue e febre amarela"
    },
    {
        type: "V",
        text: "Qual doença NÃO tem vacina até hoje?",
        options: ["Zika", "Febre amarela", "Dengue", "Todas têm"],
        answer: "Zika"
    },
    {
        type: "V",
        text: "A vacina contra febre amarela é de graça no:",
        options: ["SUS", "Supermercado", "Farmácia particular", "Escola"],
        answer: "SUS"
    },
    {
        type: "V",
        text: "A vacina da febre amarela deve ser tomada a partir de:",
        options: ["6 meses", "9 meses", "5 anos", "10 anos"],
        answer: "9 meses"
    },
    {
        type: "V",
        text: "Quem deve evitar a vacina da febre amarela sem orientação médica?",
        options: ["Bebês muito pequenos", "Pessoas com baixa imunidade", "Idosos acima de 60 anos", "Todas as opções"],
        answer: "Todas as opções"
    },
    {
        type: "V",
        text: "A vacina da dengue é indicada para pessoas de:",
        options: ["4 a 60 anos", "Qualquer idade", "Apenas idosos", "Só crianças"],
        answer: "4 a 60 anos"
    },
    {
        type: "V",
        text: "Tomar vacina contra febre amarela protege por quanto tempo?",
        options: ["1 ano", "Para sempre (em muitos casos)", "Só no verão", "Apenas 6 meses"],
        answer: "Para sempre (em muitos casos)"
    },
    {
        type: "V",
        text: "Quem nunca tomou vacina da febre amarela deve:",
        options: ["Se vacinar ", "Não se preocupar", "Tomar só vitamina C", "Esperar ficar doente"],
        answer: "Se vacinar"
    },
    {
        type: "V",
        text: "A vacina contra dengue ajuda a evitar:",
        options: ["Formas graves da doença", "Zika", "Gripe", "Resfriado"],
        answer: "Formas graves da doença"
    },
    {
        type: "V",
        text: "Existe vacina contra zika para grávidas?",
        options: ["Sim", "Não", "Só fora do Brasil", "Em alguns estados"],
        answer: "Não"
    },
    {
        type: "V",
        text: "Por que vacinas são importantes?",
        options: ["Para curar gripe", "Para evitar doenças graves", "Para emagrecer", "Para melhorar o sono"],
        answer: "Para evitar doenças graves"
    },
    {
        type: "V",
        text: "A vacina contra febre amarela é feita com:",
        options: ["Vírus morto", "Vírus enfraquecido", "Bactéria", "Água"],
        answer: "Vírus enfraquecido"
    },
    {
        type: "V",
        text: "Quem já teve dengue pode tomar vacina contra dengue?",
        options: ["Sim", "Não", "Só em hospital particular", "Só crianças"],
        answer: "Sim"
    },
    {
        type: "V",
        text: "Qual órgão libera vacinas no Brasil?",
        options: ["Anvisa", "Polícia Federal", "IBGE", "Prefeitura"],
        answer: "Anvisa"
    },
    {
        type: "V",
        text: "É seguro tomar vacina durante resfriado leve?",
        options: ["Sim", "Não", "Só no inverno", "Só com antibiótico"],
        answer: "Sim"
    },
    {
        type: "V",
        text: "Alguns países exigem comprovante de vacina contra:",
        options: ["Febre amarela", "Zika", "Dengue", "Todas"],
        answer: "Febre amarela"
    },
    {
        type: "V",
        text: "Qual a forma de proteção contra zika, já que não existe vacina?",
        options: ["Evitar picadas do mosquito", "Tomar antibióticos", "Comer frutas", "Tomar sol"],
        answer: "Evitar picadas do mosquito"
    },
    {
        type: "V",
        text: "Quem está grávida pode tomar vacina da dengue?",
        options: ["Não", "Sim", "Apenas no 1º trimestre", "Só em hospital particular"],
        answer: "Não"
    },
    {
        type: "V",
        text: "O intervalo entre doses da vacina da dengue é de:",
        options: ["6 meses", "1 ano", "2 anos", "1 mês"],
        answer: "6 meses"
    },
    {
        type: "V",
        text: "Tomar vacina ajuda a:",
        options: ["Proteger só você", "Proteger você e quem está ao seu redor", "Aumentar a febre", "Criar mosquito"],
        answer: "Proteger você e quem está ao seu redor"
    },

    // --- PERGUNTAS DE MITO OU VERDADE (M) ---
    {
        type: "M",
        text: "O mosquito da dengue só nasce em água suja.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "Quem já pegou dengue nunca mais pega de novo.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "A zika pode causar problemas nos bebês de grávidas.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "Tomar vitamina C evita dengue.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "O mosquito da dengue também transmite febre amarela urbana.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "Só pessoas pobres podem pegar dengue.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "Quem mora em apartamento não precisa se preocupar com mosquito.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "A febre amarela pode matar se não for tratada.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "A zika pode ser transmitida por relação sexual.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "Chá caseiro cura dengue.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "A vacina da febre amarela é de graça no posto de saúde.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "O fumacê sozinho acaba com os mosquitos.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "Uma tampinha de garrafa com água pode virar criadouro de mosquito.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "Quem já vacinou contra febre amarela está protegido para a vida inteira (na maioria dos casos).",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "A dengue pode ficar grave e causar sangramentos.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "O mosquito só aparece no verão.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "Colocar areia nos pratinhos das plantas ajuda na prevenção.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "A febre amarela passa de uma pessoa para outra.",
        options: ["Mito", "Verdade"],
        answer: "Mito"
    },
    {
        type: "M",
        text: "Usar repelente ajuda a se proteger de dengue, zika e febre amarela.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },
    {
        type: "M",
        text: "Deixar o lixo bem tampado ajuda a evitar o mosquito.",
        options: ["Mito", "Verdade"],
        answer: "Verdade"
    },

    // --- PERGUNTAS DE EMERGÊNCIA (E) ---
    {
        type: "E",
        text: "João tem febre alta, dor de cabeça e dor no corpo. O que pode ser?",
        options: ["Dengue", "Dor de estômago", "Resfriado", "Asma"],
        answer: "Dengue"
    },
    {
        type: "E",
        text: "Maria, grávida, tem manchas vermelhas pelo corpo e febre baixa. Qual doença pode ser?",
        options: ["Zika", "Dengue", "Gripe", "Catapora"],
        answer: "Zika"
    },
    {
        type: "E",
        text: "Um viajante volta da Amazônia com febre alta e pele amarelada. O que pode ser?",
        options: ["Febre amarela", "Dengue", "Zika", "Resfriado"],
        answer: "Febre amarela"
    },
    {
        type: "E",
        text: "Pedro sente dor atrás dos olhos e muito cansaço. Qual a suspeita?",
        options: ["Dengue", "Sinusite", "Zika", "Hepatite"],
        answer: "Dengue"
    },
    {
        type: "E",
        text: "Uma gestante pega zika. Qual risco para o bebê?",
        options: ["Microcefalia", "Obesidade", "Alergia", "Diabetes"],
        answer: "Microcefalia"
    },
    {
        type: "E",
        text: "Ana tem dengue e começa a sangrar pela gengiva. Isso indica:",
        options: ["Dengue grave", "Gripe", "Zika", "Sinusite"],
        answer: "Dengue grave"
    },
    {
        type: "E",
        text: "José tem febre amarela e sua pele ficou amarelada. O que aconteceu?",
        options: ["Fígado foi afetado", "Gripe forte", "Intoxicação alimentar", "Falta de sol"],
        answer: "Fígado foi afetado"
    },
    {
        type: "E",
        text: "Qual exame ajuda a confirmar dengue?",
        options: ["Teste rápido de sangue", "Raio-X", "Ultrassom", "Endoscopia"],
        answer: "Teste rápido de sangue"
    },
    {
        type: "E",
        text: "Se uma pessoa com dengue tomar aspirina, o que pode acontecer?",
        options: ["Aumentar risco de sangramento", "Melhorar rápido", "Nada", "Curar a doença"],
        answer: "Aumentar risco de sangramento"
    },
    {
        type: "E",
        text: "Qual é o tratamento correto para dengue, zika e febre amarela?",
        options: ["Beber bastante água e procurar médico", "Tomar antibiótico em casa", "Chá de ervas apenas", "Esperar passar sozinho"],
        answer: "Beber bastante água e procurar médico"
    },
    {
        type: "E",
        text: "Um adolescente tem febre forte e dor abdominal. O que fazer?",
        options: ["Levar ao hospital", "Dar chá em casa", "Esperar 3 dias", "Ignorar"],
        answer: "Levar ao hospital"
    },
    {
        type: "E",
        text: "Em epidemia de zika, quem precisa de mais cuidado?",
        options: ["Gestantes", "Idosos", "Crianças", "Homens adultos"],
        answer: "Gestantes"
    },
    {
        type: "E",
        text: "Carlos tem febre amarela grave. Onde deve ser tratado?",
        options: ["Hospital", "Em casa", "Farmácia", "Escola"],
        answer: "Hospital"
    },
    {
        type: "E",
        text: "Sofia está com zika. Quais sintomas são mais comuns?",
        options: ["Manchas na pele e coceira", "Tosse seca", "Dor de garganta", "Dor no estômago"],
        answer: "Manchas na pele e coceira"
    },
    {
        type: "E",
        text: "Se alguém suspeita de dengue, qual atitude é correta?",
        options: ["Procurar médico e não se automedicar", "Tomar qualquer remédio", "Ignorar sintomas", "Fazer exercício físico"],
        answer: "Procurar médico e não se automedicar"
    },
    {
        type: "E",
        text: "Qual sintoma é mais típico da zika do que da dengue?",
        options: ["Coceira intensa", "Febre alta", "Dor de cabeça forte", "Sangramento"],
        answer: "Coceira intensa"
    },
    {
        type: "E",
        text: "Quem tomou vacina da febre amarela ainda precisa se proteger contra:",
        options: ["Dengue e zika", "Gripe", "Covid-19", "Catapora"],
        answer: "Dengue e zika"
    },
    {
        type: "E",
        text: "Um adolescente tem febre súbita e dor forte no corpo. Vive em bairro com focos de mosquito. Qual a suspeita?",
        options: ["Dengue", "Asma", "Resfriado", "Otite"],
        answer: "Dengue"
    },
    {
        type: "E",
        text: "Uma grávida nunca teve dengue. Qual cuidado deve ter?",
        options: ["Evitar picadas do mosquito", "Não ir ao médico", "Tomar vacina da dengue", "Comer menos sal"],
        answer: "Evitar picadas do mosquito"
    },
    {
        type: "E",
        text: "Paciente com febre amarela grave precisa de:",
        options: ["Internação e cuidados intensivos", "Chá caseiro", "Antibiótico simples", "Só repouso em casa"],
        answer: "Internação e cuidados intensivos"
    },
];

// Referências aos elementos HTML
const menuScreen = document.getElementById('menu-screen');
const playersScreen = document.getElementById('players-screen');
const gameScreen = document.getElementById('game-screen');
const victoryScreen = document.getElementById('victory-screen');
const startGameBtn = document.getElementById('start-game-btn');
const playerCountBtns = document.querySelectorAll('.player-count-btn');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const diceDisplay = document.getElementById('dice-display');
const gameBoard = document.getElementById('game-board');
const questionBox = document.querySelector('.question-box');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const playerNamesInput = document.getElementById('player-names-input');
const namesContainer = document.getElementById('names-container');
const startNamesBtn = document.getElementById('start-names-btn');
const playerStatusDiv = document.getElementById('player-status');
const questionTitle = document.getElementById('question-title');
const restartGameBtn = document.getElementById('restart-game-btn');

// Funções de controlo de tela
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Eventos de inicialização
startGameBtn.addEventListener('click', () => {
    showScreen('players-screen');
});

playerCountBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        const numPlayers = parseInt(e.target.dataset.players);
        createNameInputs(numPlayers);
        showScreen('players-screen');
    });
});

startNamesBtn.addEventListener('click', () => {
    initializePlayers();
    showScreen('game-screen');
});

restartGameBtn.addEventListener('click', () => {
    resetGame();
});

// NOVO: Função para criar os campos de input para os nomes
function createNameInputs(num) {
    namesContainer.innerHTML = '';
    for (let i = 0; i < num; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('name-input');
        input.placeholder = `Nome do Jogador ${i + 1}`;
        input.id = `player-name-${i}`;
        namesContainer.appendChild(input);
    }
    playerNamesInput.classList.remove('hidden');
}

// Inicialização de jogadores e tabuleiro
function initializePlayers() {
    players = [];
    currentPlayerIndex = 0;
    winnersCount = 0; // Reinicia o contador de vencedores
    const colors = ['#f44336', '#2196f3', '#4caf50', '#ffc107'];
    playerStatusDiv.innerHTML = '';

    // Criação do tabuleiro
    gameBoard.innerHTML = '';
    for (let i = 0; i <= 29; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `cell-${i}`;
        if (specialCells[i]) {
            cell.classList.add(`cell-${specialCells[i]}`);
            cell.textContent = specialCells[i];
        } else {
            cell.textContent = i;
        }
        gameBoard.appendChild(cell);
    }

    const nameInputs = document.querySelectorAll('.name-input');
    nameInputs.forEach((input, i) => {
        const playerName = input.value || `Jogador ${i + 1}`;
        players.push({
            id: i,
            name: playerName,
            color: colors[i],
            position: 0,
            vaccines: 0,
            prevention: 0
        });

        const playerToken = document.createElement('div');
        playerToken.classList.add('player-token');
        playerToken.style.backgroundColor = colors[i];
        playerToken.id = `player-${i}-token`;
        document.getElementById('cell-0').appendChild(playerToken);

        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
            <h4 style="color: ${colors[i]}">${playerName}</h4>
            <p id="player-${i}-status">
                Vacinas: ${players[i].vaccines} | Prevenção: ${players[i].prevention}
            </p>
        `;
        playerStatusDiv.appendChild(playerCard);
    });
    
    updatePlayerStatus();
    highlightCurrentPlayer();
}

// Lógica de movimentação e perguntas
rollDiceBtn.addEventListener('click', () => {
    rollDiceBtn.disabled = true;
    diceRoll = Math.floor(Math.random() * 6) + 1;
    diceDisplay.textContent = `Dado: ${diceRoll}`;
    
    setTimeout(() => {
        movePlayer(players[currentPlayerIndex], diceRoll);
    }, 1000);
});

function movePlayer(player, steps) {
    player.position += steps;
    
    if (player.position >= 29) {
        player.position = 29;
        const token = document.getElementById(`player-${player.id}-token`);
        const newCell = document.getElementById(`cell-${player.position}`);
        newCell.appendChild(token);
        setTimeout(() => endGame(player), 1000);
        return;
    }

    const token = document.getElementById(`player-${player.id}-token`);
    const newCell = document.getElementById(`cell-${player.position}`);
    newCell.appendChild(token);

    const cellType = specialCells[player.position];
    if (cellType === "V" || cellType === "P" || cellType === "E" || cellType === "M") {
        setTimeout(() => showQuestion(cellType), 500);
    } else {
        setTimeout(endTurn, 500);
    }
}

// Lógica de perguntas
function showQuestion(type) {
    const typeMap = {
        'V': 'Vacina',
        'P': 'Prevenção',
        'M': 'Emergência',
        'E': 'Mito ou Verdade'
    };
    
    questionTitle.textContent = typeMap[type] || 'Pergunta';

    const filteredQuestions = questions.filter(q => q.type === type);
    const selectedQuestion = filteredQuestions[Math.random() * filteredQuestions.length | 0];

    if (!selectedQuestion) {
        questionText.textContent = "Nenhuma pergunta disponível para este tipo de casa.";
        optionsContainer.innerHTML = '';
        setTimeout(endTurn, 1500);
        return;
    }
    
    questionText.textContent = selectedQuestion.text;
    optionsContainer.innerHTML = '';
    selectedQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, selectedQuestion));
        optionsContainer.appendChild(button);
    });

    questionBox.classList.remove('hidden');
}

function checkAnswer(selectedOption, question) {
    const player = players[currentPlayerIndex];

    let message = "";
    let isCorrect = (selectedOption === question.answer);
    
    if (isCorrect) {
        message = "Resposta correta!";
        if (question.type === "V") {
            player.vaccines++;
        } else if (question.type === "P") {
            player.prevention++;
        } else if (question.type === "E") {
            player.prevention++;
            message += " Ganhaste um selo de Prevenção!";
        }
    } else {
        message = `Resposta incorreta. A resposta correta é: ${question.answer}.`;
    }

    updatePlayerStatus();
    showFeedback(message, isCorrect);

    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    setTimeout(() => {
        questionBox.classList.add('hidden');
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        endTurn();
    }, 2000);
}

// Funções de UI
function endTurn() {
    rollDiceBtn.disabled = false;
    highlightCurrentPlayer();
}

function showFeedback(message, isCorrect) {
    feedbackMessage.textContent = message;
    feedbackMessage.classList.remove('hidden');
    feedbackMessage.classList.add('show');
    
    if (isCorrect) {
        feedbackMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.9)'; // Verde para acerto
    } else {
        feedbackMessage.style.backgroundColor = 'rgba(244, 67, 54, 0.9)'; // Vermelho para erro
    }

    setTimeout(() => {
        feedbackMessage.classList.remove('show');
        setTimeout(() => {
            feedbackMessage.classList.add('hidden');
        }, 500);
    }, 2500);
}

function updatePlayerStatus() {
    players.forEach((player, index) => {
        const statusDiv = document.getElementById(`player-${index}-status`);
        if (statusDiv) {
            statusDiv.innerHTML = `Vacinas: ${player.vaccines} | Prevenção: ${player.prevention}`;
        }
    });
}

function highlightCurrentPlayer() {
    document.querySelectorAll('.player-card').forEach((card, index) => {
        if (index === currentPlayerIndex) {
            card.style.border = '2px solid gold';
        } else {
            card.style.border = 'none';
        }
    });
}

function endGame(player) {
    // Verifica se o jogador tem os selos para vencer
    if (player.vaccines >= 3 && player.prevention >= 2) {
        winnersCount++; // Incrementa o contador de vencedores
        
        // Define o número de vencedores necessários para terminar o jogo
        let requiredWinners;
        if (players.length === 2) {
            requiredWinners = 1;
        } else if (players.length === 3) {
            requiredWinners = 2;
        } else { // 4 jogadores
            requiredWinners = 3;
        }

        // Se o número de vencedores for igual ao necessário, o jogo acaba
        if (winnersCount === requiredWinners) {
            const victoryMessage = document.getElementById('victory-message');
            // Mensagem genérica, pois pode haver mais de um vencedor
            victoryMessage.textContent = `Parabéns aos vencedores!`;
            rollDiceBtn.disabled = true;
            showScreen('victory-screen');
        } else {
            // Se o jogo não acabou, o jogador atual fica no final e a jogada passa para o próximo
            showFeedback(`Parabéns, ${player.name}! Venceste o jogo, mas a partida continua para os outros!`, true);
            
            // Move a peça para fora do tabuleiro para indicar que ele já venceu
            const token = document.getElementById(`player-${player.id}-token`);
            if (token) {
                token.remove();
            }
            
            // Passa para o próximo jogador
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            endTurn();
        }
    } else {
        // Lógica de punição, que permanece a mesma
        const punishmentMessage = `O Jogador ${player.name} chegou ao final, mas não tem os "selos" suficientes para vencer! Como punição, volta ao início do tabuleiro!`;
        showFeedback(punishmentMessage, false);
        feedbackMessage.style.backgroundColor = 'rgba(255, 165, 0, 0.9)';
        
        const token = document.getElementById(`player-${player.id}-token`);
        const startCell = document.getElementById(`cell-0`);
        const currentCell = document.getElementById(`cell-${player.position}`);
        
        if (currentCell && token) {
            currentCell.removeChild(token);
            startCell.appendChild(token);
        }

        player.position = 0;
        
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        
        setTimeout(endTurn, 2500);
    }
}

function resetGame() {
    // Redefine as variáveis do jogo para o estado inicial
    players = [];
    currentPlayerIndex = 0;
    diceRoll = 0;
    winnersCount = 0; // Reinicia o contador de vencedores
    
    // Limpa o conteúdo das seções
    gameBoard.innerHTML = '';
    playerStatusDiv.innerHTML = '';
    namesContainer.innerHTML = '';
    
    // Esconde a tela de nomes
    playerNamesInput.classList.add('hidden');
    
    // Volta para a tela de seleção de jogadores
    showScreen('players-screen');

}
