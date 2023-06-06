describe("board presence check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="3"]').click();
		cy.get(":nth-child(1) > .container").contains("p", "Meet our Board!");
		cy.get(":nth-child(1) > .bg-acm-blue").contains("Divyank Shah");
		cy.get(":nth-child(1) > .bg-acm-blue").contains("President");
		cy.get(":nth-child(2) > .bg-acm-lightpurple").contains("Eliot Lee");
		cy.get(":nth-child(2) > .bg-acm-lightpurple").contains(
			"Vice President"
		);
		cy.get(":nth-child(3) > .bg-acm-yellow").contains("Menthy Wu");
		cy.get(":nth-child(3) > .bg-acm-yellow").contains("Projects Director");
		cy.get(":nth-child(3) > .bg-acm-yellow").contains("Menthy Wu");
		cy.get(".bg-acm-pink").contains("Aarav Sane");
		cy.get(".bg-acm-pink").contains("Secretary");
		cy.get(".bg-acm-orange").contains("Jasmita Yechuri");
		cy.get(".bg-acm-orange").contains("Prof Dev");
		cy.get(".bg-acm-marine").contains("Isean Bhanot");
		cy.get(".bg-acm-marine").contains("Membership");
		cy.get(":nth-child(8) > .bg-acm-blue").contains("Joshua Hsu");
		cy.get(":nth-child(8) > .bg-acm-blue").contains("Industry");
		cy.get(":nth-child(10) > .bg-acm-lightpurple").contains(
			"Noah Snodgrass"
		);
		cy.get(":nth-child(10) > .bg-acm-lightpurple").contains("Treasurer");
		cy.get(":nth-child(11) > .bg-acm-yellow").contains("Kapilan Ramasamy");
		cy.get(":nth-child(11) > .bg-acm-yellow").contains("Marketing");
	});
});
