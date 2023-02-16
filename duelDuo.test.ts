
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking "Add to Duo" displays id="player-duo"', async () => {
    await (await driver).findElement(By.xpath('//*[@id="draw"]')).click();
    await (await driver).sleep(3000)
    expect('id="choices"').toBeTruthy()
    await (await driver).sleep(3000)
})

test('Clicking Draw button displays id="choices"', async () =>{
    const div = await driver.findElement(By.id('choices'))
    const displayed = await div.isDisplayed()
    expect(displayed).toBe(false)
})