describe("What We Do and Image Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="2"]').click();
		cy.get(":nth-child(3) > .text-center > .text-heading").contains(
			"What we do!",
		);
		cy.get(".d-none > .p-4");
		cy.get(":nth-child(3) > .text-center > .text-text").contains(
			"p",
			"Every quarter, we focus on improving specific aspects of our members. In the Fall, we develop professional resumes, build all-star LinkedIns, and offer workshops on Applying Effectively at companies from the Big 4 to startups. In the Winter, we introduce technical pathways ranging from web/app development to security to cloud computing. In the Spring, we focus on all the small engineering cruft that is expected knowledge for CS students that classes don't cover: Offline Editing, Source Control, Using APIs, and more.",
		);
	});
});
