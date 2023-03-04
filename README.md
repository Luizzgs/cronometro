<h1>Timer com Programação Funcional</h1>
<br />
Este projeto consiste em um exemplo de um timer simples que utiliza programação funcional. Nesse modelo, as funções são tratadas como unidades independentes e puras, o que significa que elas não modificam o estado do programa ou das variáveis. A seguir, uma breve descrição das funções utilizadas:

<h2>initialState</h2>
Variável que guarda o estado inicial do timer.

<h2>formatTime(time)</h2>
Função que recebe um valor numérico e retorna uma string formatada em dois dígitos.

<h2>tick(state)</h2>
Função que recebe um estado e retorna um novo estado com as propriedades atualizadas de acordo com a lógica do timer. Essa função não modifica o estado original, mas retorna um novo estado.

<h2>startTimer(state)</h2>
Função que recebe um estado e retorna um novo estado com a propriedade running definida como verdadeira e um intervalo de atualização de 10 milissegundos. Essa função não modifica o estado original, mas retorna um novo estado.

<h2>pauseTimer(state)</h2>
Função que recebe um estado e retorna um novo estado com a propriedade running definida como falsa e sem intervalo de atualização. Essa função não modifica o estado original, mas retorna um novo estado.

<h2>resetTimer()</h2>
Função que retorna o estado inicial do timer.

<h2>update()</h2>
Função que atualiza o estado do timer chamando a função tick e renderiza o novo estado chamando a função render. Essa função não modifica o estado original, mas retorna um novo estado.

<h2>render(state)</h2>
Função que renderiza o estado do timer atualizado no HTML. Essa função não modifica o estado original, mas retorna um novo estado.

<h2>state</h2>
Variável que guarda o estado atual do timer.

<h3>document.getElementById('start')</h3>
Evento que inicia o timer quando o botão "Start" é clicado.


