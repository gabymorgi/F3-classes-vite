import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import "@testing-library/jest-dom"
import App from './App';

describe("App test", () => {
    test("button submit trigger event", () => {
        const component = render(<App />)
        const input = component.getByTestId("input")
        // fireEvent.change(input, {target: {value: 5}})
        expect(input).toHaveValue("3")
    })
})
