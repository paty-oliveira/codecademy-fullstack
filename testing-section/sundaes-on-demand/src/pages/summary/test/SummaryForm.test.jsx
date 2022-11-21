import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import  { SummaryForm} from "../SummaryForm";

describe("<SummaryForm />", () => {
    test("Checkbox is unchecked by default", () => {
        render(<SummaryForm/>);
        const checkbox = screen.getByRole("checkbox", { name: "I agree to Terms and Conditions" });
        expect(checkbox).not.toBeChecked();

        const confirmButton = screen.getByRole("button", { name: "Confirm order" });
        expect(confirmButton).toBeDisabled();
    })

    test("Checking checkbox enables confirm button", () => {
        render(<SummaryForm/>);
        const checkbox = screen.getByRole("checkbox", { name: "I agree to Terms and Conditions" });

        // Checking checkbox
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        const confirmButton = screen.getByRole("button", { name: "Confirm order" });
        expect(confirmButton).toBeEnabled();
    })

    test("Unchecking checkbox again disables confirm button", () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole("checkbox", { name: "I agree to Terms and Conditions" });
        const confirmButton = screen.getByRole("button", { name: "Confirm order" });

        //Checking checkbox
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        // Unchecking checkbox
        fireEvent.click(checkbox);
        expect(confirmButton).toBeDisabled();
    })
})
