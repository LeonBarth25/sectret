(() => { /* Start of: BMG - IL Granito Button Code */

$('#w-node-_67f3a354-872a-28bf-f546-273d4265dbba-01a8b4b5').remove()

// Global strings & elements
const button1Selector = '.next-button-type.w-button',
    form1Selector = '#type-form',
    radioSelector = '.w-radio',
    slideSelector = '[bmg-element = "slide"]',
    otherButtonSelector = '.next-button-slide',
    lastButtonsSelector = '.collection-next-button'

// + Main functions +

// Other buttons
let $slides = $(slideSelector),
    lastSlideIndex = $slides.length - 1

$slides.each(function(index)
{
    // Local elements
    let $slide = $(this),
        $radios = $slide.find(radioSelector),
        $button = index != lastSlideIndex ? $slide.find(otherButtonSelector) : $slide.find(lastButtonsSelector),
        buttonClasses = $button.attr('class'),
        buttonText = $button.text()

    // Create fake button
    $button.parent().append( $button.clone() )
    
    let $fakeButton = $button.next()
    $fakeButton.css({ 'pointer-events': 'none' })
    $fakeButton.wrap(`<div style='cursor: not-allowed;'></div>`)

    $button.hide()

    // Button conditional logic
    $fakeButton.parent().click(() => 
    {
        addRedBorder( $radios )
    })

    // Radio logic
    $radios.click(() =>
    {
        removeRedBorder( $radios )
        $fakeButton.parent().hide()
        $button.show()
    })
})

// Button one
$(button1Selector).each(function()
{
    // Local elements & variables
    let $button = $(this),
        buttonClasses = $button.attr('class'),
        buttonText = $button.text()
        button2ExtraStyles = { 'grid-column-start': 'span 2', 'grid-column-end': 'span 2' },
        $form1 = $(form1Selector),
        $radioButtons = $form1.find( radioSelector )

    // Itterate styles
    $button.parent().append(`<div class='${ buttonClasses }' style='cursor: not-allowed; width: 100%;'>${ buttonText }</div>`)

    let $fakeButton = $button.next()
    $fakeButton.css( button2ExtraStyles )
    
    $button.hide()

    // Button conditional logic
    $fakeButton.click(() => 
    {
        addRedBorder( $radioButtons )
    })

    // Radio logic
    $radioButtons.click(() =>
    {
        removeRedBorder( $radioButtons )
        $fakeButton.hide()
        $button.show()
    })
})


// - Helper functions -

// Add border
function addRedBorder( $elements )
{
    $elements.each(function()
    {
        gsap.to($(this)[0], { borderColor: 'red', duration: .35 })
    })
}

// Remover border
function removeRedBorder( $elements )
{
    $elements.each(function()
    {
        gsap.to($(this)[0], { borderColor: '', duration: .35 })
    })
}

})() /* End of: BMG - IL Granito Button Code */
