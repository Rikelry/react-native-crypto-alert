# Planejamento de testes com IA generativa

## Prompt utilizado

Analise as telas do projeto React Native Crypto Alert e sugira quatro cenários de testes end-to-end utilizando Maestro. Considere a listagem de criptomoedas, conversão de moedas, listagem de alertas e criação de alertas. Os testes devem verificar elementos visíveis e ações do usuário.

## Resposta original da IA

1. Abrir o aplicativo e verificar se a tela Cryptocurrencies é exibida.
2. Acessar a tela Convert Crypto, preencher o campo Amount e verificar o resultado da conversão.
3. Acessar a tela Price Alerts e verificar se a mensagem No alerts yet aparece quando não existem alertas.
4. Acessar a criação de alerta, selecionar uma criptomoeda, informar o preço desejado, escolher uma condição e salvar.

## Cenários selecionados

| Teste | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir a tela inicial | Exibir Cryptocurrencies |
| 2 | Converter moeda | Exibir o resultado da conversão |
| 3 | Consultar alertas | Exibir Price Alerts |
| 4 | Criar alerta | Salvar e exibir o novo alerta |

## Análise crítica

Os quatro cenários foram aproveitados porque representam funcionalidades reais do aplicativo.

Os testes foram planejados considerando os textos e componentes encontrados no código-fonte.

É necessário conferir os seletores no aplicativo instalado, pois a IA pode sugerir elementos que não possuem identificação acessível.

Os testes também precisam ser executados manualmente para verificar se os resultados esperados realmente acontecem.
