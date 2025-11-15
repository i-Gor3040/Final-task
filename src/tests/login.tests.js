describe("Login tests", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it("UC-1: Login form with empty credentials", async () => {
    await expect(browser).toHaveTitle("Swag Labs");
  });
});
/**
 * UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
 */
