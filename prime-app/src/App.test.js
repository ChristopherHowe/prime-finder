import { render, screen } from '@testing-library/react'
import App from './App'


describe('render tests', () => {
	beforeEach(() => {
		render(<App />);
	});

	it('renders welcome title', () => {
		const headerElement = screen.getByText(/Welcome to/, {exact: false});
		expect(headerElement).toBeInTheDocument();
	});

	it('renders enter label', () => {
		const labelElement = screen.getByTitle('enter label');
		expect(labelElement).toBeInTheDocument();
	});

	it('renders database number label', () => {
		const headerElement = screen.getByTitle('database number label');
		expect(headerElement).toBeInTheDocument();
	});

	it('renders database number', () => {
		const headerElement = screen.getByText('0');
		expect(headerElement).toBeInTheDocument();
	});

	it('renders prime state', () => {
		const headerElement = screen.getByText('Yes it\'s prime!');
		expect(headerElement).toBeInTheDocument();
	});
});