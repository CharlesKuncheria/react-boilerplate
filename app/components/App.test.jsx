// not working? know why?
import React from 'react';
import App from './App.jsx';
import renderer from 'react-test-renderer';

describe('App', () => {
    it('renders the same', () => {
        const component = renderer.create(
        <App/>
    );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})