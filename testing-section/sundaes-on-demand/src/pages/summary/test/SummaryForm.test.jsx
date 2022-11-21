import React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryForm } from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        const confirmButton = screen.getByRole("button", { name: "Confirm order" });
        expect(confirmButton).toBeEnabled();
    })

    test("Unchecking checkbox again disables confirm button", () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole("checkbox", { name: "I agree to Terms and Conditions" });
        const confirmButton = screen.getByRole("button", { name: "Confirm order" });

        //Checking checkbox
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        // Unchecking checkbox
        userEvent.click(checkbox);
        expect(confirmButton).toBeDisabled();
    })
})
