describe("Gallery Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get(".p-0 > .mb-0").click();
		cy.get(".flex-col");
	});
});
