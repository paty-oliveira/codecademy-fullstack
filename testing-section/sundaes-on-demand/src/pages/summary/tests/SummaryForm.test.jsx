import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
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

    test("Popover responds to hover", async () => {
        render(<SummaryForm />);

        // popover start out hidden
        const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
        expect(nullPopover).not.toBeInTheDocument();

        // popover appears on mouseover of checkbox label
        const termsAndConditions = screen.getByText(/terms and conditions/i);
        userEvent.hover(termsAndConditions);
        const popover = screen.getByText(/no ice cream will actually be delivered/i);
        expect(popover).toBeInTheDocument();
    })
})
