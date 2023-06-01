import { fireEvent, render, screen } from '@testing-library/react';
import {describe, test, expect, vitest} from 'vitest';
import Game from './App';

describe("App test", () => {
    test("span is in dom", () => {
        // render recibe un componente y lo renderiza en un contenedor virtual (jsdom)
        render(<Game game="Tetris" />);
        screen.debug() // imprime el contenedor virtual en la consola. Despues se borra
        // screen es un objeto que contiene funciones para buscar elementos en el contenedor virtual
        // getByText busca un elemento que contenga el texto que se le pasa como parametro
        // estas funciones se llaman queries, podes ver todas las queries en la documentacion de testing-library
        // vean los links en el README.md
        const result = screen.getByText("I lost The Game");
        expect(result).toBeTruthy();
    })
    test("heading shows param", () => {
        render(<Game game="Tetris" />);
        // getByRole busca un elemento por su rol, por ejemplo, un heading es un elemento con el rol "heading"
        // por ejemplo, h1, h2, h3, h4, h5, h6 son headings
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("Tetris");
    })
    test("click button change value", () => {
        render(<Game game="Tetris" />);
        const button = screen.getByText("Jugar");
        // fireEvent simula un evento en un elemento
        // en este caso, simula un click en el boton
        fireEvent.click(button);
        // el click en el boton cambia el texto del boton
        expect(button.textContent).toBe("Detener");
    })
    test("multiple clicks button doesnt fire multiple callback", () => {
        // vitest.fn crea una funcion mock
        // cuando hacemos testing queremos abstraernos de todas las dependencias
        // y testear el componente de forma aislada
        // aca solo nos importa que se llame a esta funcion cuando se presiona el boton
        // no nos importa que hace la funcion
        // y no queremos correr el riesgo de que la funcion haga algo que rompa el test
        // ya habra un test para la funcion
        const mockCallback = vitest.fn();
        render(<Game game="Tetris" onStartPlaying={mockCallback} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        fireEvent.click(button);
        // hacemos dos clicks en el boton, pero la funcion se tiene que llamar una sola vez
        expect(mockCallback).toBeCalledTimes(1);
    })
})
