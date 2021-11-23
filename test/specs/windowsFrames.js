describe('Window operarations', async() => {
    xit('switch window operation', async () => {
        await browser.url("/AutomationPractice/")
        const openBtn = await $("#openwindow")
        await openBtn.waitForDisplayed()
        await openBtn.scrollIntoView()

        const parentWin = await browser.getWindowHandle()
        console.log(` parentWin title ->${await browser.getTitle()}`);

        await openBtn.click()
        const allWindowHandles = await browser.getWindowHandles()
        await browser.switchToWindow(allWindowHandles[1])
        console.log(await browser.getTitle())
        await browser.maximizeWindow()
        await browser.closeWindow()
        await browser.switchToWindow(allWindowHandles[0])

        await browser.newWindow("https://www.google.com") //create a new tab
        const newWinTitle = await browser.getTitle()      //get tite of new tab
        console.log(newWinTitle);
        await browser.switchWindow("/AutomationPractice/") //switch back to old window/tab using url 

        console.log("Main window title ->"+await browser.getTitle());
    })

    it("Frames operations",async ()=>{
        await browser.url("/AutomationPractice/")
        console.log("number of links in current page ->"+await $$("a").length);
        await browser.switchToFrame(await $("#courses-iframe")) //switch to frame using frame id 
        console.log(await $("*=Home").getText())  //frame operation 
        console.log("number of links in current page ->"+await $$("a").length);
        await browser.switchToParentFrame() //switching back to parent frame 
        console.log("number of links in current page ->"+await $$("a").length);

    })
})
