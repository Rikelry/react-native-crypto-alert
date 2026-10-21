import { formatChange, formatPrice } from "../index";

describe("formatPrice", () => {
    it("formata um preço com duas casas decimais", () => {
        expect(formatPrice(1234.5)).toBe("1,234.50");
    });

    it("formata preços pequenos", () => {
        expect(formatPrice(0.58)).toBe("0.58");
    });

    it("permite definir a quantidade de casas decimais", () => {
        expect(formatPrice(12.3456, 3)).toBe("12.346");
    });

    it("formata zero", () => {
        expect(formatPrice(0)).toBe("0.00");
    });
});

describe("formatChange", () => {
    it("adiciona sinal positivo para variações positivas", () => {
        expect(formatChange(2.456)).toBe("+2.46%");
    });

    it("mantém o sinal negativo para variações negativas", () => {
        expect(formatChange(-1.23)).toBe("-1.23%");
    });

    it("trata variação zero como positiva", () => {
        expect(formatChange(0)).toBe("+0.00%");
    });
});