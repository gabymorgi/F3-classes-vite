import { fireEvent, render, screen } from '@testing-library/react';
import {describe, test, expect, vitest} from 'vitest';
import App from './App';

describe("App test", () => {
    test('La app debe tener un titulo que diga "Cookie Clicker"', () => {
        render(<App />);
        const result = screen.getByText("Cookie Clicker");
        expect(result).toBeTruthy();
    })
    test('La app debe tener un boton que diga "Click me!"', () => {
        render(<App />);
        const result = screen.getAllByRole("button")[0]
        expect(result.textContent).toBe("Click me!")
    })
    test('La app debe tener un contador que diga "0"', () => {
        render(<App />);
        const result = screen.getByText("0")
        expect(result.textContent).toBe("0")
    })
    test('La app debe incrementar el contador en 1 cada vez que se presiona el boton', () => {
        render(<App />);
        const button = screen.getByRole("button", {name: "Click me!"})
        const result = screen.getByText("0")
        fireEvent.click(button)
        expect(result.textContent).toBe("1")
    })
    test('La app debe tener un boton que diga "Ascend"', () => {
        render(<App />);
        const result = screen.getByRole("button", {name: "Ascend"})
        expect(result).toBeTruthy()
    })
    test('El boton "Ascend" debe estar deshabilitado cuando el contador es menor a 10', () => {
        render(<App />);
        const result = screen.getByRole("button", {name: "Ascend"})
        expect(result).toHaveProperty("disabled", true)
    })
    test('El boton "Ascend" debe estar habilitado cuando el contador es mayor a 9', () => {
        render(<App />);
        const button = screen.getByRole("button", {name: "Click me!"})
        for (let i = 0; i < 10; i++) {
            fireEvent.click(button)
        }
        const result = screen.getByRole("button", {name: "Ascend"})
        expect(result).toHaveProperty("disabled", false)
    })
    test('La app recibe un parametro opcional que es una funcion que se ejecuta cuando se presiona el boton "Ascend"', () => {
        const mockCallback = vitest.fn();
        render(<App onClick={mockCallback} />);
        const button = screen.getByRole("button", {name: "Click me!"})
        for (let i = 0; i < 10; i++) {
            fireEvent.click(button)
        }
        const ascendButton = screen.getByRole("button", {name: "Ascend"})
        fireEvent.click(ascendButton)
        expect(mockCallback).toBeCalledTimes(1)
    })
})
