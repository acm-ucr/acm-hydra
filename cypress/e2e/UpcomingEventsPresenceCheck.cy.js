describe("Upcoming Events Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000").scrollTo("0%", "42%");
		cy.get(".w-full > p").contains("Upcoming Events");
		cy.get(".w-full .p-3").contains(
			"No upcoming events, please check back later!"
		);
		cy.get(".mb-20 .font-lexend .text-4xl");
		cy.get(".mb-20 .font-lexend .text-2xl");
		cy.get(".mb-20 .font-lexend .text-md");
	});
});
