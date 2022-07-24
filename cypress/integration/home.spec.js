describe("Page index", () => {
  it("should renders correctly", () => {
    cy.visit("/");

    cy.get("h1").contains("Hello to my template!");
  });
});
