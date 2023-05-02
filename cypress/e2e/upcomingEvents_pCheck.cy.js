describe("Upcoming Events Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");

		cy.get(".w-full > .text-heading").contains("Upcoming Events");

		cy.get('[eventkey="4"] > .mb-0').click();
		cy.get(".mb-20 > .text-heading").contains("Upcoming Events");
	});
});
