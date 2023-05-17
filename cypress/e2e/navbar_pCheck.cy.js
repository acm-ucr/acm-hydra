describe("Navigation Bar Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");

		cy.get('[eventkey="6"] > .mb-0').click();
		cy.location("href").should("eq", "http://localhost:3000/");

		cy.get(".p-0 > .mb-0").click();
		cy.location("href").should("eq", "http://localhost:3000/about");

		cy.get('[eventkey="3"] > .mb-0').click();
		cy.location("href").should("eq", "http://localhost:3000/board");

		cy.get('[eventkey="4"] > .mb-0').click();
		cy.location("href").should("eq", "http://localhost:3000/events");

		cy.get('[eventkey="5"] > .mb-0').click();
		cy.location("href").should("eq", "http://localhost:3000/join");

		cy.get('[eventkey="7"] > .mb-0').click();
	});
});
