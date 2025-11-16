import { faker } from "@faker-js/faker";

describe("Login tests", () => {
  beforeEach(async () => {
    await browser.url("/");
  });

  it.only("UC-1: Login form with empty credentials", async () => {
    // await expect(browser).toHaveTitle("Swag Labs");
    const username = faker.internet.username({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    });

    const password = faker.internet.password();
    // console.log(username);
    // console.log(password);

    await $('[data-test="username"]').setValue(username);
    await $('[data-test="password"]').setValue(password);
    await $('[data-test="username"]').setValue(" ");
    await $('[data-test="password"]').setValue("");
    await browser.pause(1000);

    await $('[data-test="login-button"]').click();
    await expect($('[data-test="error"]')).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
/**
 * UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
 */
