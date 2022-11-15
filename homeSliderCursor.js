/* Start of: Custom Slider Mouse Arrow */

// Elements & strings
const $slider = $('#home-slider'),
    $mask = $slider.find('.w-slider-mask'),
    $left = $slider.find('.w-slider-arrow-left'),
    $right = $slider.find('.w-slider-arrow-right'),
    $cursor = $slider.find('.slider-cursor')

// Main function
if( $(window).width() > 767 ){ $mask.click(() => 
{
    // Local values
    let cursorOpacity = parseFloat( $cursor.css('opacity') ),
        cursorRotation = getRotationDegrees( $cursor )

    // Local logic
    if ( cursorOpacity == 1 )
    {
        if ( cursorRotation <= 90 )
        {
            $right.click()
        }
        else
        {
            $left.click()
        }
    }
}) }

// Helper function
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

/* End of: Custom Slider Mouse Arrow */
