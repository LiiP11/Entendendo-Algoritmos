# :rat: Entendendo Algoritmos

<div>
	<img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/2101997-1000-1000/lv414420_1.jpg?v=638101741358630000" style="width: 100%">
</div>

## :ledger: Capitulo 1
### Exercícios

- :question: **1.1** Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?

- :white_check_mark: **Resposta:** 7 etapas!

<br>

- :question: **1.2** Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?

- :white_check_mark: **Resposta:** 8 etapas!

<br>

- ***Forneça o tempo de execução para cada um dos casos a seguir em termos de notação Big O.***

- :question: **1.3** Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica?

- :white_check_mark: **Resposta:** Por se tratar de uma agenda telefônica onde os nomes estão em uma lista ordenada alfabeticamente, a complexidade de tempo será **O(log n)**.

<br>

- :question: **1.4** Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica.(Dica: Deve procurar pela agenda inteira!)

- :white_check_mark: **Resposta:** Devido ao fato de percorrer cada entrada até encontrar o nome desejado, a complexidade será **O(n)**.


<br>

- :question: **1.5** Você quer ler o número de cada pessoa da agenda telefônica?

- :white_check_mark: **Resposta:** A complexidade de tempo para essa operação será **O(n)**. Isso ocorre porque você precisa acessar cada elemento individualmente para ler o número de telefone associado a cada pessoa.


<br>

- :question: **1.6** Você quer ler os números apenas dos nomes que começam com A.(Isso é complicado! Esse algoritmo envolve conceitos que são abordados mais pra frente no Capítulo 4. Leia a resposta - você ficará surpreso!)

- :white_check_mark: **Resposta:** O(n).

### :negative_squared_cross_mark: Complexidade algorítmica

<table style="width: 100%">
	<tr>
		<th>n</th>
		<th>log2n</th>
	</tr>
	<tr>
		<td>1</td>
		<td>0</td>
	</tr>
	<tr>
		<td>2</td>
		<td>1</td>
	</tr>
	<tr>
		<td>4</td>
		<td>2</td>
	</tr>
	<tr>
		<td>8</td>
		<td>3</td>
	</tr>
	<tr>
		<td>16</td>
		<td>4</td>
	</tr>
	<tr>
		<td>32</td>
		<td>5</td>
	</tr>
	<tr>
		<td>64</td>
		<td>6</td>
	</tr>
	<tr>
		<td>128</td>
		<td>7</td>
	</tr>
	<tr>
		<td>256</td>
		<td>8</td>
	</tr>
	<tr>
		<td>512</td>
		<td>9</td>
	</tr>
	<tr>
		<td>1024</td>
		<td>10</td>
	</tr>
	<tr>
		<td>1.048.576</td>
		<td>20</td>
	</tr>
	<tr>
		<td>2.097.152</td>
		<td>21</td>
	</tr>
</table>

## :o2:	Notação BIG O
<table style="width: 100%">
	<tr>
		<td>O(log n)</td>
		<td>Busca binária</td>
	</tr>
	<tr>
		<td>O(n)</td>
		<td>Busca simples</td>
	</tr>
	<tr>
		<td>O(n log n)</td>
		<td>Ordenação quicksort</td>
	</tr>
	<tr>
		<td>O(n2)</td>
		<td>Ordenação de seleção</td>
	</tr>
	<tr>
		<td>O(n!)</td>
		<td>Problema do caixeiro viajante</td>
	</tr>
</table>

## :ledger: Capitulo 2
### Exercícios

- :question: **2.1** Suponha que você esteja criando um aplicativo para acompanhar as suas finanças. Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês, você deverá revisar os seus gastos e resumir o quanto gastou. Logo, você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?

- :white_check_mark: **Resposta:** Neste caso por ter muitas inserções e poucas leituras, para implementar este aplicativo a melhor opção seria uma **lista**, pois são mais eficientes para inserções.

<br>

- :question: **2.2** Suponha que você esteja criando um aplicativo para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinha-los. Você usaria um array ou uma lista para encadeada para implementar essa lista?(Dica: listas encadeadas são boas para inserções/eliminações e arrays são bons para acesso aleatório.O que fazer neste caso?)

- :white_check_mark: **Resposta:** As filas são frequentemente implementadas usando **listas ligadas**, pois elas permitem inserções eficientes no final (enqueue) e remoções eficientes no início (dequeue) da fila.

<br>

- :question: **2.3** Vamos analisar um experimento. Imagine que o Facebook guarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome de usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook usa a pesquisa binária para procurar um nome na lista. A pesquisa binária requer acesso aleatório - você precisa ser capaz de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista como um array ou uma lista encadeada?

- :white_check_mark: **Resposta:** A busca binária é mais eficiente quando você tem acesso aleatório aos elementos da lista, pois ela divide a busca pela metade a cada iteração. Portanto, ao implementar uma busca binária, é mais adequado usar um array em vez de uma lista encadeada.

<br>

- :question: **2.4** As pessoas se inscrevem no Facebook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais as desvantagens de um array em relação ás inserções? Em particular, imagine que você está usando uma pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?

- :white_check_mark: **Resposta:** A adição de elementos a arrays está condicionada à existência prévia de espaço de memória alocado. No cenário mencionado, ao empregar uma pesquisa binária, é essencial que os elementos a serem adicionados estejam dispostos em ordem. Isso implica que, no pior caso, pode ser necessário deslocar todos os elementos na lista para acomodar a inserção do novo elemento.

<br>

- :question: **2.5** Na verdade, o Facebook não usa nem array nem listas encadeadas para armazenar informações. Vamos considerar uma estrutura de dados híbrida: um array de listas encadeadas. Você tem um array com 26 slots. Cada slot aponta para uma lista encadeada. Por exemplo, o primeiro slot do array aponta para uma lista encadeada que contém usuários que começam com A. O segundo slot aponta para uma lista encadeada que contém os usuários que começam com a letra B, e assim por diante.
Suponha que o Adit B se inscreva no Facebook e você queira adicioná-lo á lista. Você vai do slot 1 do array, a seguir para a lista encadeada do slot 1, e adiciona Adit B no final. Agora, suponha que você queira procurar o Zakhir H.Você vai ao slot 26, que aponta para a lista encadeada de todos os nomes começados em Z. Então, procura pela lista até encontrar o Zakhir H.
Compare esta estrutura híbrida com arrays e listas encadeadas. É mais lento ou mais rápido fazer inserções e eliminações nesse caso? Você não precisa responder dando o tempo de execução Big(O), apenas diga se a nova estrutura de dados é mais rápida ou mais lenta do que os arrays e as listas encadeadas.

- :white_check_mark: **Resposta:** A estrutura de dados híbrida proposta, que utiliza um array de listas encadeadas, combina as características de arrays e listas encadeadas para otimizar a organização de dados baseada em determinadas propriedades.
A inserção é mais eficiente se você souber onde o elemento deve ser colocado (nesse caso, com base na letra inicial do nome). No exemplo dado, ao adicionar um novo usuário, você vai diretamente para o slot apropriado e, em seguida, para a lista encadeada associada, realizando uma inserção no final da lista. Isso pode ser mais eficiente do que uma lista encadeada única ou um array com necessidade de realocações frequentes. A eliminação pode ser eficiente se você souber a posição do elemento. No entanto, se a eliminação exigir a busca na lista encadeada, pode ser menos eficiente do que a eliminação em uma lista encadeada única.

## :ledger: Capitulo 3
### Exercícios

- :question: **3.1** Suponha que eu forneça uma pilha de chamada como esta: <br>
Quais informações você pode retirar baseando-se apenas nesta pilha de chamada?

-	<div>
		<img src="https://drek4537l1klr.cloudfront.net/bhargava/Figures/045fig02.jpg">
	</div>

- :white_check_mark: **Resposta:** Você pode identificar a ordem exata em que as funções foram chamadas, começando da base (função principal) até o topo (função mais recentemente chamada). A função no topo da pilha é a função que está atualmente em execução. Isso pode ajudar a entender o contexto atual da execução do programa. A pilha de chamadas mostra como as funções estão aninhadas umas nas outras. Cada nível representa um novo contexto de execução.

<br>

- :question: **3.2** Suponha que você acidentalmente escreva uma função recursiva que fique executando infinitamente. Como você viu, seu computador aloca memória na pilha para cada chamada de função. O que acontece com a pilha quando a função recursiva fica executando infinitamente?

- :white_check_mark: **Resposta:** Quando uma função recursiva fica executando infinitamente, ela gera uma chamada recursiva após outra, sem atingir uma condição de parada. Quando a pilha atinge seu limite máximo, ocorre um estouro de pilha, e o programa geralmente termina abruptamente com um erro. O erro mais comum relacionado a esse tipo de situação é conhecido como "stack overflow" (estouro de pilha).

## :ledger: Capitulo 4
### Exercícios

- :question: **4.1** Escreva o código para função **soma**, vista anteriormente.

- :white_check_mark: **Resposta:**
```
const sum = arr => {
	if (arr.length === 0) return 0;

	return arr[0] + sum(arr.slice(1));
};

const array = [1, 2, 3, 4, 5];

console.log(sum(array));
```

- :question: **4.2** Escreva uma função recursiva que conte o numero de itens em uma lista.

- :white_check_mark: **Resposta:**
```
const countItems = list => {
	if (list.length === 0) return 0;

	return 1 + countItems(list.slice(1));
};

const myList = [1, 2, 3, 4, 5];

console.log(countItems(myList));
```
- :question: **4.3** Encontre o valor mais alto em uma lista.

- :white_check_mark: **Resposta:**
```
const maxValue = list => {
	if (list.length === 2) {
		return list[0] > list[1] ? list[0] : list[1];
	}

	const subMax = maxValue(list.slice(1));

	return list[0] > subMax ? list[0] : subMax;
};

const myList = [3, 7, 2, 8, 5];

console.log(maxValue(myList));
```

- :question: **4.4** Você se lembra da pesquisa binária do Capitulo 1? Ela também é um algoritmo do tipo dividir para conquistar. Você consegue determinar o caso-base e o caso recursivo para a pesquisa binária?

- :white_check_mark: **Resposta:** 
- **Caso Base:** *Condição de Parada:* O caso base ocorre quando a sublista é reduzida a um único elemento, e esse elemento é igual ao valor procurado. Nesse caso, a pesquisa foi bem-sucedida, e a função retorna a posição desse elemento na lista.
*Condição de Falha:* Se a sublista for reduzida a zero (sem elementos) e o valor não for encontrado, a função também retorna um indicativo de falha (por exemplo, -1).

- **Caso Recursivo:** *Divisão do Problema:* A busca binária divide o problema original em dois subproblemas menores. O elemento no meio da sublista é comparado com o valor procurado.
*Escolha da Sublista:* Se o valor procurado for igual ao elemento no meio, a pesquisa é concluída. Caso contrário, a busca continua na metade da sublista em que o valor procurado pode estar com base na comparação.

- ***Quanto tempo levaria, em notação Big O, para completar cada uma destas operações?***

- :question: **4.5** Imprimir o valor de cada elemento em um array.

- :white_check_mark: **Resposta:** A complexidade de tempo para imprimir o valor de cada elemento em um array seria O(n). Isso ocorre porque, para imprimir cada elemento uma vez, você precisará percorrer todos os elementos do array uma vez, resultando em uma complexidade linear em relação ao tamanho do array.

<br>

- :question: **4.6** Duplicar o valor de cada elemento em um array.

- :white_check_mark: **Resposta:** Ainda teria uma complexidade de tempo de O(n), porque, assim como na impressão, precisaria percorrer todos os elementos do array uma vez para realizar a operação de duplicação.

<br>

- :question: **4.7** Duplicar o valor apenas do primeiro elemento do array.

- :white_check_mark: **Resposta:** A complexidade de tempo seria constante, ou seja, O(1). Isso porque a operação de duplicação seria realizada apenas uma vez, independentemente do tamanho total do array.

<br>

- :question: **4.8** Criar uma tabela de multiplicação com todos os elementos do array. Assim, caso o seu array seja [2, 3, 7, 8, 10], você primeiro multiplicará cada elemento por 2. Depois, multiplicará cada elemento por 3 e então por 7, e assim por diante.

- :white_check_mark: **Resposta:** O(n²)
```
const multiplicationTable = arr => {
	let newArr = [];

	for (const i of arr) {
		let row = [];

		for (const j of arr) {
			row.push(i * j);
		}

		newArr.push(row);
	}

	return newArr;
};

const array = [2, 3, 7, 8, 10];

console.log(multiplicationTable(array));
```

## :ledger: Capitulo 5
### Exercícios

- ***É importante que funções hash retornem o mesmo valor de saída quando o mesmo valor de entrada for inserido. Caso contrário, não será possível encontrar  o item que você deseja na tabela hash!***

- :question: Quais destas funções hash são consistentes?

- :question: **5.1** f(x) = 1

- :white_check_mark: **Resposta:** Esta função é consistente, pois independentemente do valor de x, ela sempre retorna 1.

<br>

- :question: **5.2** f(x) = rand()

- :white_check_mark: **Resposta:** Esta função não é consistente, pois rand() retorna um valor aleatório, portanto, não produzirá o mesmo valor de hash para o mesmo input.

<br>

- :question: **5.3** f(x) = proximo_espaco_vazio()

- :white_check_mark: **Resposta:** Se proximo_espaco_vazio() sempre retornar o mesmo valor para o mesmo x, então será consistente. Caso contrário, pode não ser consistente dependendo da implementação específica.

<br>

- :question: **5.4** f(x) = len(x)

- :white_check_mark: **Resposta:** Esta função é consistente, pois o comprimento de uma string x sempre será o mesmo, produzindo assim o mesmo valor de hash para o mesmo input.