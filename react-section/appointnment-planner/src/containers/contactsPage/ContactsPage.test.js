import React from "react";
import { shallow } from 'enzyme';

import { ContactsPage } from "./ContactsPage";

describe('<ContactsPage />', () => {
    it('should render ContactsPage properly', () => {
        const contactsPageComponent = shallow(<ContactsPage />);

        expect(contactsPageComponent).toMatchSnapshot();
    });

    it('should render contacts with the given information', () => {
        const contact = [{
            name: "patricia",
            phoneNumber: "910025679",
            email: "example@xpto.com"
        }]

        const contactsPageComponent = shallow(<ContactsPage contacts={contact} />)

        expect(contactsPageComponent).toMatchSnapshot();
    });
});
