describe("clubroom presence check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.contains("join us").click();
		cy.get(".flex-col.font-lexend > .font-lexend").contains("ACM Clubroom");
		cy.get(".flex-col.font-lexend > .font-lexend")
			.scrollIntoView({ offset: { top: 40, left: 0 } })
			.end();
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains(
			"p",
			"We will often hold academic, professional, and technical workshops and events in this room! Located in Winston Chung Hall 127, behind Bytes, you can expect a lively environment to study, socialize, and learn new things!"
		);
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains(
			"Here are the perks:"
		);
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains(
			"li",
			"Whiteboard walls"
		);
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains(
			"li",
			"Programming books"
		);
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains(
			"li",
			"Lockers"
		);
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains("li", "Snacks");
		cy.get(".flex-col.font-lexend > .bg-acm-blue").contains("li", "Drinks");
		cy.get(".bg-acm-blue > .flex > .p-4");
	});
});
