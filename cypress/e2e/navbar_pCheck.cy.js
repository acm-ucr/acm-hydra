describe("Navigation Bar Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");

		cy.get('[eventkey="6"]').click();
		cy.location("href").should("eq", "http://localhost:3000/");

		cy.get('[eventkey="2"]').click();
		cy.location("href").should("eq", "http://localhost:3000/about");

		cy.get('[eventkey="3"]').click();
		cy.location("href").should("eq", "http://localhost:3000/board");

		cy.get('[eventkey="4"]').click();
		cy.location("href").should("eq", "http://localhost:3000/events");

		cy.get('[eventkey="5"]').click();
		cy.location("href").should("eq", "http://localhost:3000/join");

		cy.get(".ml-2");
	});
});
