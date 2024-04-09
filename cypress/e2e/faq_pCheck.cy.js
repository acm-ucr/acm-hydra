describe("FAQ Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");

		cy.get('[eventkey="5"]').click();
		cy.get(".mb-5 > .text-acm-black").contains(
			"Frequently Asked Questions",
		);
	});
});
