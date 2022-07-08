import { render, screen } from '@testing-library/react'
import App from './App'

test('render form', () => {
	render(<App />);
	const labelElement = screen.getByTitle('enter label');
	expect(labelElement).toBeInTheDocument();
});

//unit tests
//test that primeInput renders
//test that welcome renders
//test that enter a number renders
//test that current DB renders
//test that DB number renders
//test that prime state renders

//integration tests
//test that primeInput sends data to API
//test that sendData can send data to API
//test that db number is updated when data is sent
//test that prime state is updated when data is sent

