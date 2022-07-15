import React from "react";
import { shallow, mount } from 'enzyme';

import App from "./App";

describe('App', () => {
    const contactsProps = [{
        name: "patricia",
        phoneNumber: "910025679",
        email: "example@xpto.com"
    }]

});
    it('should render correctly', () => {
        const appComponent = shallow(<App />);

        expect(appComponent).toMatchSnapshot();
    });
;

