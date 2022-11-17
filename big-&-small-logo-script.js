(() => { /* Start of: BMG big & small logo script */

// Global elements
const $AA = $('.logo--awan'),
    $Aa = $('.emblem--awan'),
    textArray = [ $('.big-logo-content'), $('.samll-logo-content') ],
    $tapText = $('.text.is--white.is--awan'),
    $logoHoverBg = $('.logo-hover-container'),
    currentBgColorArray = ['rgb(251, 102, 14)', 'rgb(246, 46, 131)']

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
        gsap.to( $tapText[0], { opacity: .7, duration: .6 })
        gsap.to( $logoHoverBg[0], { backgroundColor: 'transparent', duration: .6 })
    })
    
    $theseBigLetters.click(() => 
    {
        if ( clickCounter == 1 )
        {
            clickCounter++
            gsap.to([$theseBigLetters[0], $thisRevealText[0]], { opacity: 1, duration: .6 })
            gsap.to($tapText[0], { opacity: 0, duration: .6 })
            gsap.to( $logoHoverBg[0], { backgroundColor: currentBgColorArray[index], duration: .6 })
        }
        else if ( clickCounter == 2 )
        {
            clickCounter--
            gsap.to([ $theseBigLetters[0], $tapText[0] ], { opacity: .7, duration: .6 })
            gsap.to($thisRevealText[0], { opacity: 0, duration: .6 })
            gsap.to( $logoHoverBg[0], { backgroundColor: 'transparent', duration: .6 })
        }
    })
}) }

})() /* End of: BMG AA Aa script */
