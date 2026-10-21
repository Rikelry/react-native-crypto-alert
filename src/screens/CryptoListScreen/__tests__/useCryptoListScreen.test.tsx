import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useCryptoListScreen } from "../useCryptoListScreen";
import {
    cryptocurrencies as fallbackCryptos,
    fetchCryptocurrenciesFromApi,
} from "@data/cryptoData";
import type { Cryptocurrency } from "@data/cryptoData";

jest.mock("@data/cryptoData", () => {
    const actual = jest.requireActual("@data/cryptoData");
    return {
        ...actual,
        fetchCryptocurrenciesFromApi: jest.fn(),
    };
});

const mockFetch = jest.mocked(fetchCryptocurrenciesFromApi);

const apiCryptos: Cryptocurrency[] = [
    {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC",
        price: 65000,
        change24h: 2.5,
        image: "",
    },
];

describe("useCryptoListScreen", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("carrega criptomoedas da API com sucesso", async () => {
        mockFetch.mockResolvedValue(apiCryptos);

        const { result } = await renderHook(() => useCryptoListScreen());

        await waitFor(() => {
            expect(result.current.loadingState).toBe("idle");
        });

        expect(result.current.cryptocurrencies).toEqual(apiCryptos);
        expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it("usa os dados estáticos quando a API falha", async () => {
        mockFetch.mockRejectedValue(new Error("Falha na API"));

        const { result } = await renderHook(() => useCryptoListScreen());

        await waitFor(() => {
            expect(result.current.loadingState).toBe("error");
        });

        expect(result.current.cryptocurrencies).toEqual(fallbackCryptos);
    });

    it("retorna estado vazio quando a API não tem resultados", async () => {
        mockFetch.mockResolvedValue([]);

        const { result } = await renderHook(() => useCryptoListScreen());

        await waitFor(() => {
            expect(result.current.loadingState).toBe("empty");
        });

        expect(result.current.cryptocurrencies).toEqual([]);
    });

    it("tenta carregar novamente quando handleRetry é chamado", async () => {
        mockFetch.mockResolvedValue(apiCryptos);

        const { result } = await renderHook(() => useCryptoListScreen());

        await waitFor(() => {
            expect(result.current.loadingState).toBe("idle");
        });

        await act(async () => {
            await result.current.handleRetry();
        });

        await waitFor(() => {
            expect(mockFetch).toHaveBeenCalledTimes(2);
        });
    });
});