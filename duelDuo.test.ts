
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('duel-duo testing', () => {

    
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })
    
    
    test('click on button to display bots', async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(200)
        const divOptions = await driver.findElement(By.id('choices'))
        const display = await divOptions.isDisplayed()
        expect(display).toBe(true)
    })

    test('click on add to duo to display the bot in a new div', async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(4000)
        await driver.findElement(By.xpath('(//button[text() = "Add to Duo"])[1]')).click()
        const duoPlayer = await driver.findElement(By.id('player-duo'))
        const displayed = await duoPlayer.isDisplayed()
        expect(displayed).toBe(true)
    })
})