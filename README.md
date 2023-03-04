<h1>Timer com Programação Funcional</h1>
<br />
Este projeto consiste em um exemplo de um timer simples que utiliza a abordagem de programação funcional. Nesse modelo, as funções são tratadas como unidades independentes e puras, o que significa que elas não modificam o estado do programa ou das variáveis. A seguir, uma breve descrição das funções utilizadas:

initialState<br />
Variável que guarda o estado inicial do timer.

formatTime(time)<br />
Função que recebe um valor numérico e retorna uma string formatada em dois dígitos.

tick(state)<br />
Função que recebe um estado e retorna um novo estado com as propriedades atualizadas de acordo com a lógica do timer. Essa função não modifica o estado original, mas retorna um novo estado.

startTimer(state)<br />
Função que recebe um estado e retorna um novo estado com a propriedade running definida como verdadeira e um intervalo de atualização de 10 milissegundos. Essa função não modifica o estado original, mas retorna um novo estado.

pauseTimer(state)<br />
Função que recebe um estado e retorna um novo estado com a propriedade running definida como falsa e sem intervalo de atualização. Essa função não modifica o estado original, mas retorna um novo estado.

resetTimer()<br />
Função que retorna o estado inicial do timer.

update()<br />
Função que atualiza o estado do timer chamando a função tick e renderiza o novo estado chamando a função render. Essa função não modifica o estado original, mas retorna um novo estado.

render(state)<br />
Função que renderiza o estado do timer atualizado no HTML. Essa função não modifica o estado original, mas retorna um novo estado.

state<br />
Variável que guarda o estado atual do timer.

document.getElementById('start')<br />
Evento que inicia o timer quando o botão "Start" é clicado.

document.getElementById('pause')<br />
Evento que pausa o timer quando o botão "Pause" é clicado.

document.getElementById('reset')<br />
Evento que reseta o timer quando o botão "Reset" é clicado.

Com a abordagem de programação funcional, esse código torna-se mais fácil de entender, testar e modificar, sem que haja efeitos colaterais ou estados imprevisíveis. Ele é ideal para projetos que precisam lidar com estados e funções complexas.
