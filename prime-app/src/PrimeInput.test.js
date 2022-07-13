import App from './App'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

//This test suite currently only contains render tests but would include integration tests in the future

describe('Prime Input does Render', () => {
    it('submit button', () => {
        render(<App/>)
        const buttonElement = screen.getByTitle("submit button");
        expect(buttonElement).toBeInTheDocument();
    });
    it('input textbox', () => {
        render(<App/>)
        const textboxElement = screen.getByTitle('new input textbox');
        expect(textboxElement).toBeInTheDocument();
    });
});