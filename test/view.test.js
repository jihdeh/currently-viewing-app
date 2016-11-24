import React from "react";
import App from "../src/app.jsx";
import renderer from "react-test-renderer";

test("updates displaying ip address", () => {
	const component =	renderer.create(
		<App />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
