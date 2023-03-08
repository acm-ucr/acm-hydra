describe("Project Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.scrollTo("bottom");
		cy.get(":nth-child(5) > .justify-center");
		cy.get(".shadow-acm-green");
		cy.get(".shadow-acm-lightblue");
		cy.get(".shadow-acm-purple");
	});
});
