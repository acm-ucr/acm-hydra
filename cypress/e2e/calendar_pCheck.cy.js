describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="4"] > .mb-0').click();
		cy.get(".pt-4").contains("Calendar of Events");
		cy.get(".justify-start");
		cy.get(".col-8 > .m-0 > :nth-child(1) > .w-full").contains("General");
		cy.get(".m-0 > :nth-child(2) > .w-full").contains("Career");
		cy.get(".m-0 > :nth-child(3) > .w-full").contains("Social");
		cy.get(".m-0 > :nth-child(4) > .w-full").contains("Technical");
		cy.get(".m-0 > :nth-child(5) > .w-full").contains("Academic");
	});
});
