describe("Stats Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000").scrollTo("0%", "30%");
		cy.get(".decoration-acm-black > .mb-5").contains("500+ members");
		cy.get(".decoration-acm-black > .mb-5").contains("1000+ alumni");
		cy.get(".decoration-acm-black > .mb-5").contains("50+ socials");
		cy.get(".decoration-acm-black > .mb-5").contains("100+ workshops");
	});
});
