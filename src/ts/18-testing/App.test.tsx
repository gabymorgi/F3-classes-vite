import { fireEvent, render, screen } from '@testing-library/react';
import {describe, test, expect, vitest} from 'vitest';
import Game from './App';

describe("App test", () => {
    test("span is in dom", () => {
        render(<Game game="Tetris" />);
        screen.debug()
        const result = screen.getByText("I lost The Game");
        expect(result).toBeTruthy();
    })
    test("heading shows param", () => {
        render(<Game game="Tetris" />);
        const button = screen.getByRole("heading");
        expect(button.textContent).toBe("Tetris");
    })
    test("click button change value", () => {
        render(<Game game="Tetris" />);
        const button = screen.getByText("Jugar");
        fireEvent.click(button);
        expect(button.textContent).toBe("Detener");
    })
    test("click button fire callback", () => {
        const mockCallback = vitest.fn();
        render(<Game game="Tetris" onStartPlaying={mockCallback} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(mockCallback).toBeCalledTimes(1);
    })
})
