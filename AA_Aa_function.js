(() => { /* Start of: BMG AA Aa script */

// Global elements
const $AA = $('.a-capital-wrap'),
    $Aa = $('.a-lower-wrap'),
    textArray = [ $('.grenadine'), $('.arboria') ],
    $tapText = $('.text.is--white.is--happy-cow')

// Main function
if ( $(window).width() <= 767 ) { $AA.add( $Aa ).each(function(index)
{
    // Local elements
    let $theseBigLetters = $(this),
        clickCounter = 0,
        $thisRevealText = textArray[index]

    $theseBigLetters.hover(() => 
    {
        clickCounter = 1
    }, () =>
    {
        clickCounter = 0
        gsap.to( $tapText[0], { opacity: .55, duration: .35 })
    })
    
    $theseBigLetters.click(() => 
    {
        if ( clickCounter == 1 )
        {
            clickCounter++
            gsap.to([$theseBigLetters[0], $thisRevealText[0]], { opacity: 1, duration: .35 })
            gsap.to($tapText[0], { opacity: 0, duration: .35 })
        }
        else if ( clickCounter == 2 )
        {
            clickCounter--
            gsap.to([ $theseBigLetters[0], $tapText[0] ], { opacity: .55, duration: .35 })
            gsap.to($thisRevealText[0], { opacity: 0, duration: .35 })
        }
    })
}) }

})() /* End of: BMG AA Aa script */
