describe("Student Organization Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="5"]').click();
		cy.get(":nth-child(1) > .bg-acm-blue");
		cy.get(
			".container > :nth-child(2) > :nth-child(2) > .bg-acm-lightpurple",
		);
		cy.get(":nth-child(3) > .bg-acm-yellow");
		cy.get(":nth-child(4) > .bg-acm-green");
		cy.get(":nth-child(5) > .bg-acm-pink");
		cy.get(":nth-child(6) > .bg-acm-orange");
		cy.get(":nth-child(7) > .bg-acm-marine");
		cy.get(":nth-child(8) > .bg-acm-blue");
		cy.get(":nth-child(9) > .bg-acm-lightpurple");
		cy.get(":nth-child(10) > .bg-acm-yellow");
		cy.get(":nth-child(11) > .bg-acm-green");
		cy.get(":nth-child(12) > .bg-acm-pink");
		cy.get(":nth-child(13) > .bg-acm-orange");
	});
});
