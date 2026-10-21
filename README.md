# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

---


`npx jest --runInBand`


```Bash
 PASS  src/components/CryptoCard/__tests__/CryptoCard.test.tsx
 PASS  src/screens/CryptoListScreen/__tests__/useCryptoListScreen.test.tsx
 PASS  src/components/PrimaryButton/__tests__/PrimaryButton.test.tsx
 PASS  src/utils/__tests__/index.test.ts

Test Suites: 4 passed, 4 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        1.91 s
Ran all test suites.
```

`npx jest --coverage --runInBand`

```Bash
 PASS  src/components/CryptoCard/__tests__/CryptoCard.test.tsx
 PASS  src/components/PrimaryButton/__tests__/PrimaryButton.test.tsx
 PASS  src/screens/CryptoListScreen/__tests__/useCryptoListScreen.test.tsx
 PASS  src/utils/__tests__/index.test.ts
```

| File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| :------------------------ | ------: | -------: | ------: | ------: | :---------------- |
| All files                 |   74.75 |    50.87 |      60 |   78.72 |                   |
|  components/CryptoCard    |    64.7 |    28.57 |   42.85 |   73.33 |                   |
|   CryptoCard.styles.ts    |     100 |      100 |     100 |     100 |                   |
|   CryptoCard.tsx          |   66.66 |    35.29 |      50 |   66.66 | 74                |
|   useCryptoCard.ts        |   61.53 |        0 |      40 |   72.72 | 12,21-22          |
|  components/PrimaryButton |     100 |    61.53 |     100 |     100 |                   |
|   PrimaryButton.styles.ts |     100 |      100 |     100 |     100 |                   |
|   PrimaryButton.tsx       |     100 |    63.63 |     100 |     100 | 31,33-43          |
|   usePrimaryButton.ts     |     100 |       50 |     100 |     100 | 10                |
|  context/AlertProvider    |   77.77 |       80 |   53.33 |   83.87 |                   |
|   AlertProvider.tsx       |     100 |      100 |     100 |     100 |                   |
|   useAlertProvider.ts     |   76.47 |       80 |      50 |   82.75 | 33,63-68,72,84    |
|  data                     |      20 |        0 |       0 |   21.42 |                   |
|   cryptoData.ts           |      20 |        0 |       0 |   21.42 | 88-132            |
|  screens/CryptoListScreen |     100 |      100 |     100 |     100 |                   |
|   useCryptoListScreen.ts  |     100 |      100 |     100 |     100 |                   |
|  theme                    |     100 |      100 |     100 |     100 |                   |
|   colors.ts               |     100 |      100 |     100 |     100 |                   |
|  utils                    |     100 |      100 |     100 |     100 |                   |
|   index.ts                |     100 |      100 |     100 |     100 |                   |

```Bash
Test Suites: 4 passed, 4 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        1.705 s, estimated 2 s
Ran all test suites.
```