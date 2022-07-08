import App from './App'
import { sendData } from './userinput.js'
import { render, screen } from '@testing-library/react'

describe('integration tests', () => {
    it('sendData test', () => {
        sendData({ "new_input": 6 })
        render(<app />)
        const outputDBElement = screen.getByText("6");
        expect(outputDBElement).toBeInTheDocument();

    });
});
describe('Prime Input does Render', () => {
    it('submit button', () => {
        render(<App />)
        const buttonElement = screen.getByTitle("submit button");
        expect(buttonElement).toBeInTheDocument();
    });
    it('input textbox', () => {
        render(<App />)
        const textboxElement = screen.getByTitle('new input textbox');
        expect(textboxElement).toBeInTheDocument();
    });
});