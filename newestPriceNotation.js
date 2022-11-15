(() => { /* Start of: BMG - Price notation code */

// Global strings
const wrapperSelector = '[bmg_price-notation = "wrapper"]',
    price1Selector = '[bmg_price-notation = "price-1"]',
    price2Selector = '[bmg_price-notation = "price-2"]',
    placeholder1Selector = '[bmg_price-notation = "placeholder-1"]',
    placeholder2Selector = '[bmg_price-notation = "placeholder-2"]'

// Main function
$(wrapperSelector).each(function()
{
    // Local elements & variables
    let price1 = parseInt( $(this).find(price1Selector).text() ),
        price2 = parseInt( $(this).find(price2Selector).text() ),
        $placeholder1 = $(this).find(placeholder1Selector),
        $placeholder2 = $(this).find(placeholder2Selector),
        countDecimals1 = countDecimals( $placeholder1.text() ),
        countDecimals2 = countDecimals( $placeholder2.text() )
        

    // Local funtction
    $placeholder1
        .text( 
            $placeholder1
                .text()
                .replace(countDecimals1[1], price1.toFixed(countDecimals1[0]))
        )
    $placeholder2
        .text( 
            $placeholder2
                .text()
                .replace(countDecimals2[1], price2.toFixed(countDecimals2[0]))
        )

    if (  price1 >=  price2 )
    {
        let text = $placeholder1.text().replace(countDecimals1[1], price1.toFixed(countDecimals1[0]))
        $(this).text( text )
    }
})

// Helper function
function countDecimals( string )
{
    let indexOfXDot = Math.max( string.indexOf('x.'), 0 ),
        prepString = string.substring( indexOfXDot ),
        countableString = prepString.indexOf(' ') >= 0 ? prepString.split(' ')[0] : prepString

    return [ countableString.length - 2, countableString ]
}

})() /* End of: BMG - Price notation code */
