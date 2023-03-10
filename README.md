<h1>Cronômetro com Programação Funcional</h1>
Este projeto consiste em um exemplo de um cronômetro simples que utiliza programação funcional. Nesse modelo, as funções são tratadas como unidades independentes e puras, o que significa que elas não modificam o estado do programa ou das variáveis. A seguir, uma breve descrição das funções utilizadas:

<h2>initialState</h2>
Variável que guarda o estado inicial do timer.

<h2>formatTime(time)</h2>
Função que recebe um valor numérico e retorna uma string formatada em dois dígitos.

<h2>tick(state)</h2>
Função que recebe um estado e retorna um novo estado com as propriedades atualizadas de acordo com a lógica do timer. Essa função não modifica o estado original, mas retorna um novo estado.

<h2>startTimer(state)</h2>
Função que recebe um estado e retorna um novo estado com a propriedade running definida como verdadeira e um intervalo de atualização de 10 milissegundos.

<h2>pauseTimer(state)</h2>
Função que recebe um estado e retorna um novo estado com a propriedade running definida como falsa e sem intervalo de atualização.  

<h2>resetTimer()</h2>
Função que retorna o estado inicial do timer.

<h2>update()</h2>
Função que atualiza o estado do timer chamando a função tick e renderiza o novo estado chamando a função render.  

<h2>render(state)</h2>
Função que renderiza o estado do timer atualizado no HTML.  

<h2>state</h2>
Variável que guarda o estado atual do timer.

<h2>document.getElementById('start')</h2>
Evento que inicia o timer quando o botão "Start" é clicado, também utilizado em "Pause" e "Restart"

<h4>Com a abordagem de programação funcional, esse código torna-se mais fácil de entender, testar e modificar, sem que haja efeitos colaterais ou estados imprevisíveis. Ele é ideal para projetos que precisam lidar com estados e funções complexas.</h4>

