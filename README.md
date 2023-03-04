<h1>Timer com Programação Funcional</h1>
Este projeto consiste em um exemplo de um cronômetro simples que utiliza programação funcional. Nesse modelo, as funções são tratadas como unidades independentes e puras, o que significa que elas não modificam o estado do programa ou das variáveis. A seguir, uma breve descrição das funções utilizadas:

<h4>initialState</h4>
Variável que guarda o estado inicial do timer.

<h4>formatTime(time)</h4>
Função que recebe um valor numérico e retorna uma string formatada em dois dígitos.

<h4>tick(state)</h4>
Função que recebe um estado e retorna um novo estado com as propriedades atualizadas de acordo com a lógica do timer. Essa função não modifica o estado original, mas retorna um novo estado.

<h4>startTimer(state)</h4>
Função que recebe um estado e retorna um novo estado com a propriedade running definida como verdadeira e um intervalo de atualização de 10 milissegundos.

<h4>pauseTimer(state)</h4>
Função que recebe um estado e retorna um novo estado com a propriedade running definida como falsa e sem intervalo de atualização.  

<h4>resetTimer()</h4>
Função que retorna o estado inicial do timer.

<h4>update()</h4>
Função que atualiza o estado do timer chamando a função tick e renderiza o novo estado chamando a função render.  

<h4>render(state)</h4>
Função que renderiza o estado do timer atualizado no HTML.  

<h4>state</h4>
Variável que guarda o estado atual do timer.

<h4>document.getElementById('start')</h4>
Evento que inicia o timer quando o botão "Start" é clicado, também utilizado em "Pause" e "Restart"


