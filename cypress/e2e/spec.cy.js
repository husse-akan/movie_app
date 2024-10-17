//Denna kollar ifall h1 taggen med text Favoritfilmer finns i urlen som vi specifiserat
//npx cypress open
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/favorites");

    cy.get("h1").should("contain.text", "Favoritfilmer");
  });
});
