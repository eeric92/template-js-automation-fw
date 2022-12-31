const { Builder, By, Key } = require('selenium-webdriver')
const assert = require('assert')
// eslint-disable-next-line no-undef
describe('Browser test', function () {
  // eslint-disable-next-line no-undef
  it('Firefox browser test', async function () {
    const driver = await new Builder().forBrowser('firefox').build()
    await driver.get('https://google.com')
    await driver.findElement(By.id('L2AGLb')).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input')).sendKeys('patata', Key.RETURN)
    await driver.sleep(1000)
    const text = await driver.findElement(By.id('pTwnEc')).getText()
    assert.strictEqual(text, 'Todo\nImágenes\nVídeos\nNoticias\nShopping\nMás\nHerramientas')
    await driver.quit()
  })

  // eslint-disable-next-line no-undef
  xit('Chrome browser test', async function () {
    const driver = await new Builder().forBrowser('chrome').build()
    await driver.get('https://google.com')
    await driver.findElement(By.id('L2AGLb')).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input')).sendKeys('patata', Key.RETURN)
    await driver.sleep(1000)
    const text = await driver.findElement(By.id('pTwnEc')).getText()
    assert.strictEqual(text, 'Todo\nImágenes\nVídeos\nNoticias\nShopping\nMás\nHerramientas')
    await driver.quit()
  })
})
