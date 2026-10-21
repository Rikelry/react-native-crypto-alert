import { fireEvent, render } from "@testing-library/react-native";
import { PrimaryButton } from "../PrimaryButton";

describe("PrimaryButton", () => {
    it("exibe o texto recebido", async () => {
        const { getByText } = await render(
            <PrimaryButton label="Salvar alerta" onPress={() => { }} />
        );

        expect(getByText("Salvar alerta")).toBeTruthy();
    });

    it("executa a ação ao pressionar", async () => {
        const onPress = jest.fn();

        const { getByText } = await render(
            <PrimaryButton label="Salvar alerta" onPress={onPress} />
        );

        fireEvent.press(getByText("Salvar alerta"));

        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("não executa a ação quando está desabilitado", async () => {
        const onPress = jest.fn();

        const { getByText } = await render(
            <PrimaryButton
                label="Salvar alerta"
                onPress={onPress}
                disabled
            />
        );

        fireEvent.press(getByText("Salvar alerta"));

        expect(onPress).not.toHaveBeenCalled();
    });
});