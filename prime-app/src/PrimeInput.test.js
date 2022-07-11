import App from './App'
import { render, screen } from '@testing-library/react'


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