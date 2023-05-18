describe("Gallery Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="2"]').click();
		cy.get(".flex-col");
	});
});
