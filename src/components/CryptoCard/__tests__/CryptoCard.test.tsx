import { fireEvent, render } from "@testing-library/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CryptoCard } from "../CryptoCard";
import { AlertProvider } from "@context/AlertProvider/AlertProvider";
import type { Cryptocurrency } from "@data/cryptoData";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock")
);

jest.mock("expo-image", () => {
  const { View } = require("react-native");
  return { Image: View };
});

const bitcoin: Cryptocurrency = {
  id: "bitcoin",
  name: "Bitcoin",
  symbol: "BTC",
  price: 65000,
  change24h: 2.5,
  image: "",
};

describe("CryptoCard", () => {
  it("exibe o nome, símbolo, preço e variação da criptomoeda", async () => {
    const { getByText } = await render(
      <AlertProvider>
        <CryptoCard crypto={bitcoin} />
      </AlertProvider>
    );

    expect(getByText("Bitcoin")).toBeTruthy();
    expect(getByText("BTC")).toBeTruthy();
    expect(getByText("$65,000.00")).toBeTruthy();
    expect(getByText("+2.50%")).toBeTruthy();
  });

  it("exibe a inicial do símbolo quando não há imagem", async () => {
    const { getByText } = await render(
      <AlertProvider>
        <CryptoCard crypto={bitcoin} />
      </AlertProvider>
    );

    expect(getByText("B")).toBeTruthy();
  });
});