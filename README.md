# Crypto Alert

Aplicativo mobile desenvolvido com React Native e Expo para acompanhar criptomoedas, converter valores e criar alertas de preço.

## Funcionalidades

- Listagem de criptomoedas.
- Conversão de criptomoedas para moedas fiduciárias.
- Consulta de preços utilizando a API CoinGecko.
- Criação e visualização de alertas de preço.
- Interface organizada em abas.

## Tecnologias

- React Native
- Expo
- TypeScript
- Expo Router
- CoinGecko API
- Jest
- Maestro (testes E2E)

## Pré-requisitos

- Node.js e npm.
- Java JDK 21.
- Android Studio e Android SDK.
- Um emulador Android configurado.
- Maestro 2.x para executar os testes E2E.

## Instalação

Clone o repositório:

```bash
git clone git@github.com:Rikelry/react-native-crypto-alert.git
cd react-native-crypto-alert
````

Instale as dependências:

```
npm install
```

Configure a variável de ambiente da API CoinGecko criando um arquivo `.env` na raiz do projeto:

```
EXPO_PUBLIC_COINGECKO_API_KEY=sua_chave_aqui
```

Não compartilhe sua chave de API nem envie o arquivo `.env` para o GitHub.

## Executando no Android

Configure o Java 21. Caso utilize SDKMAN:

```
sdk use java 21.0.8-tem
```

Inicie um emulador Android pelo Android Studio ou pelo terminal. Exemplo:

```
emulator -avd Medium_Phone_API_37.0
```

Com o emulador iniciado, execute:

```
npm run android
```

O comando compila e instala o aplicativo no emulador. Mantenha o processo do Expo/Metro em execução durante o uso do aplicativo.

## Testes automatizados

### Testes unitários

Execute:

```
npx jest --runInBand
```

Para gerar o relatório de cobertura:

```
npx jest --coverage --runInBand
```

### Testes E2E com Maestro

Com o emulador Android iniciado e o aplicativo compilado, execute todos os fluxos:

```
maestro test .maestro
```

Para executar um fluxo individual:

```
maestro test .maestro/01-listar-criptomoedas.yaml
maestro test .maestro/02-converter-criptomoeda.yaml
maestro test .maestro/03-visualizar-alertas.yaml
maestro test .maestro/04-criar-alerta.yaml
```

### Cenários E2E

| Arquivo                         | Cenário                                  |
| ------------------------------- | ---------------------------------------- |
| `01-listar-criptomoedas.yaml`   | Verifica a listagem de criptomoedas.     |
| `02-converter-criptomoeda.yaml` | Verifica a conversão de uma criptomoeda. |
| `03-visualizar-alertas.yaml`    | Verifica a tela de alertas.              |
| `04-criar-alerta.yaml`          | Cria um alerta de preço para Bitcoin.    |

## Evidências dos testes

As capturas de tela dos fluxos automatizados estão disponíveis em:

- `evidencias/fluxo-conversao.png`
- `evidencias/fluxo-criar-alerta.png`

## Estrutura dos testes

```
.maestro/
  01-listar-criptomoedas.yaml
  02-converter-criptomoeda.yaml
  03-visualizar-alertas.yaml
  04-criar-alerta.yaml

evidencias/
  fluxo-conversao.png
  fluxo-criar-alerta.png

ia/
  planejamento.md

reflexao.md
```

## Planejamento e reflexão

O planejamento dos testes com apoio de Inteligência Artificial está documentado em `ia/planejamento.md`.

A reflexão sobre o processo de desenvolvimento e utilização de IA está disponível em `reflexao.md`.