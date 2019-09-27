import React from 'react';
import { act } from 'react-dom/test-utils';
import MediaQuery from '../client/components/mediaQuery/index';

const resizeWindow = (x, y) => {
	window.innerWidth = x;
	window.innerHeight = y;
	window.dispatchEvent(new Event('resize'));
};

describe('Media query component test', () => {
	it('renders without crashing', () => {
		mount(<MediaQuery />);
	});

	it('should display the media types', () => {
		act(() => {
			resizeWindow(500, 300);
			const component = mount(<MediaQuery />);
			expect(component.html()).toEqual('mobile');
		});
		act(() => {
			resizeWindow(1900, 2000);
			const component = mount(<MediaQuery />);
			expect(component.html()).toEqual('desktop');
		});
	});
});
