$docker-compose up

O comando acima roda o teste uma única vez

Caso queira a interface um pouco melhorada no gnome-terminal ao invés do docker
é necessario ter node>=18 e rodar o comando "$npm test"

Foram realizados 3 testes\
O primeiro é o teste de uma soma, onde somamos dois valores e comparamos com os valores esperados em 4 testes, um somando dois valores positivos, um somando um negativo com um positivo e esperando um valor negativo, um esperando um valor positivo e um esperando o valor zero\
O segundo teste é uma atribuição de valores para parametros de uma classe e a chamada de uma função que usa esses parametros
O terceiro teste é para testar se um numero é par ou impar. Foram feitos 4 testes, dois para o impar (um usando string e o outro inteiro) e dois para o par (seguindo a mesma lógica)
