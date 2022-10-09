import React from "react";
import { cleanup, render, RenderResult } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
    let component:RenderResult<typeof import("../../node_modules/@testing-library/dom/types/queries"), HTMLElement>;
    beforeEach(() => {
        component = render(<Home />);
    })
	afterEach(cleanup);

	it("should render my component", () => {
		// then
		expect(component.getByTestId('welcome')).toHaveTextContent('Welcome to Next.js');
	});
});
