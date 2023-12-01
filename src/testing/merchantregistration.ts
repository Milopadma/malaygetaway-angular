const { By, Builder, until } = require('selenium-webdriver');

(async function testMerchantRegistration() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the merchant registration page
    await driver.get('http://localhost:4200/merchant/register');
    await driver.findElement(By.css('button')).click();
    await driver.wait(until.urlContains('/merchant/register/name'), 5000);

    // // Fill in the business name
    await driver.findElement(By.css('input')).sendKeys('Test Business');
    await driver.findElement(By.css('button')).click();

    // // Fill in the business details
    await driver.wait(until.urlContains('/merchant/register/details'), 5000);
    await driver
      .findElement(By.css('input[placeholder="contact number"]'))
      .sendKeys('1234567890');
    await driver
      .findElement(By.css('input[placeholder="contact email"]'))
      .sendKeys('test@test.com');
    await driver
      .findElement(By.css('textarea[placeholder="brief company description"]'))
      .sendKeys('This is a test business.');
    await driver.findElement(By.css('buttonwicon[label="Continue"]')).click();

    // // Upload business files
    await driver.wait(until.urlContains('/merchant/register/documents'), 5000);
    await driver
      .findElement(By.css('input[type="file"]'))
    //   .sendKeys('~/Downloads/test.pdf');
    await driver.findElement(By.css('buttonwicon[label="Continue"]')).click();

    // // Complete the form
    await driver.wait(until.urlContains('/merchant/register/complete'), 5000);
    await driver.findElement(By.css('buttonwicon[label="Finish"]')).click();

    // // Verify that we've been redirected to the login page
    await driver.wait(until.urlIs('http://localhost:4200/login'), 5000);
  } catch (err) {
    console.error(err);
  } finally {
    await driver.quit();
  }
})();
