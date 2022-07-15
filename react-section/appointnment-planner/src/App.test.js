import React from "react";
import { shallow } from 'enzyme';

import App from "./App";

describe('App', () => {
    it('should render correctly', () => {
        const appComponent = shallow(<App />);

        expect(appComponent).toMatchSnapshot();
    });
});

