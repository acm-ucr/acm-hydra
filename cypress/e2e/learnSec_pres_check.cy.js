describe("template spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000").scrollTo("0%", "62%");
		cy.get(".pb-2");
		cy.get(".pb-2 > .text-heading").contains("Learn");
		cy.get(".items-start > .text-center").contains("professional");
		cy.get(".items-start > .text-center > :nth-child(1)").contains(
			"resume"
		);
		cy.get(".items-start > .text-center > :nth-child(2)").contains(
			"interviews"
		);
		cy.get(".items-start > .text-center > :nth-child(3)").contains(
			"internship opportunities"
		);
		cy.get(".justify-centers").contains("technical");
		cy.get(".justify-centers > :nth-child(1)").contains("web dev");
		cy.get(".justify-centers > :nth-child(2)").contains("version control");
		cy.get(".justify-centers > :nth-child(3)").contains("data science");
		cy.get(".items-start > :nth-child(3)").contains("academic");
		cy.get(".items-start > :nth-child(3) > :nth-child(1)").contains(
			"graduate studies"
		);
		cy.get(".items-start > :nth-child(3) > :nth-child(2)").contains(
			"research"
		);
		cy.get(".items-start > :nth-child(3) > :nth-child(3)").contains(
			"course planning"
		);
	});
});
