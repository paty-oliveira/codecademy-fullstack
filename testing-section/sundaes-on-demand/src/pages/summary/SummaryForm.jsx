import React, { useState } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export function SummaryForm() {

    const [ isChecked, setIsChecked] = useState(false);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
    )

    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: 'blue'}}> Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    )

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    label={checkboxLabel}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                >
                </Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isChecked}>Confirm order</Button>
        </Form>
    )
}