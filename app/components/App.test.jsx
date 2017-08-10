// not working? know why?

import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

var store = {

};

describe('App', () => {
    it('renders the same', () => {
        let component = renderer.create(<App store={store}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})