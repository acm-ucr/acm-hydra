describe("Vision Text and Image Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="2"]').click();
		cy.get(".text-center").contains(
			"p",
			"Our Vision is simple: We want to improve our members professionally, technically, and personally. We want to help our members grow throughout their college career, whether they enter as a first-year university student or as a transfer student."
		);
		cy.get(".items-center > .p-4 > img");
	});
});
