import React, { useState } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";

export function SummaryForm() {

    const [ isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    const checkboxLabel = (
        <span>
            I agree to <span style={{ color: 'blue'}}> Terms and Conditions</span>
        </span>
    )

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