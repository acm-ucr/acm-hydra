describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get(".flex-nowrap > :nth-child(1)");
		cy.get(".flex-nowrap > :nth-child(2)");
		cy.get(".flex-nowrap > :nth-child(3)");
		cy.get(".flex-nowrap > :nth-child(4)");
		cy.get(".flex-nowrap > :nth-child(5)");
		cy.get(".flex-nowrap > :nth-child(6)");
	});
});
