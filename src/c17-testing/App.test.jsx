import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import App from './App';

describe("App test", () => {
    test("app is in dom", () => {
        render(<App />);
        screen.debug()
        const result = screen.getByText("App");
        expect(result).toBeTruthy();
    })
    test("button is in dom", () => {
        render(<App />);
        const button = screen.getByRole("button");
        expect(button.textContent).toBe("click me");
    })
    test("click button increment value", () => {
        render(<App />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        const result = screen.getByRole("heading");
        expect(result.textContent).toBe("1");
    })
})
