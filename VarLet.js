const browserVersion = "chrome"
getBrowserVersionUsingVar();
getBrowserVersionUsingLet();

function getBrowserVersionUsingVar()
{
    
    if (browserVersion == "chrome")
    {
        var browserVersion
    }
    console.log ("Browser Version: : "+browserVersion)
}

function getBrowserVersionUsingLet()
{
    
    if (browserVersion == "chrome")
    {
        let browserVersion
    }
    console.log ("Browser Version: : "+browserVersion)
}