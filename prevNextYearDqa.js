(() => {
  /* Start of: [BMG.studio] Journey prev/ next year script */

  // + Strings +

  // Selectors
  const prevButtonSelctor = '[bmg-custom-list = "prev"]',
    nextButtonSelctor = '[bmg-custom-list = "next"]',
    prevNextButtonWrapperSelector = '.journey-slider_arrow-wrapper',
    dynListWrapperSelctor = '[bmg-custom-list = "c-list-wrapper"]',
    referenceTextSelctor = '[bmg-custom-list = "next-slide"]',
    yearLinksWrapperSelector = '.journey_years';

  // Elements
  let $prev = $(prevButtonSelctor),
    $next = $(nextButtonSelctor),
    $buttonWrapper = $(prevNextButtonWrapperSelector).eq(1);
  ($referenceText = $(referenceTextSelctor)),
    ($yearLinksWrapper = $(yearLinksWrapperSelector)),
    ($dynList = $(dynListWrapperSelctor).children().eq(0));

  // Values
  let yearsObj = calcWithCurrentYear();

  // + Mains +

  // Event listener $prev
  $prev.click(() => {
    // Values
    let currentSlideIndex = getCurrentSlide();

    // Logic
    if (currentSlideIndex == 2) {
      // Previous year logic
      yearsObj.prev ? (window.location.href = yearsObj.prev) : undefined;
    }
  });

  // Event listener $prev
  $next.click(() => {
    // Values
    let currentSlideIndex = getCurrentSlide();

    // Logic
    if (isNaN(currentSlideIndex)) {
      yearsObj.next ? (window.location.href = yearsObj.next) : undefined;
    }
  });

  // + Helpers +

  function calcWithCurrentYear() {
    // Elements
    let $currentYearLink = $yearLinksWrapper.find('.w--current');

    // Values
    let prevHref = $currentYearLink.prev().attr('href'),
      nextHref = $currentYearLink.next().attr('href');

    // Return
    return (outputHrefs = {
      prev: prevHref != undefined ? prevHref : '/journey',
      next: nextHref != undefined ? nextHref : '/journey',
    });
  }

  // Get current slide
  function getCurrentSlide() {
    // Values
    let text = $referenceText.text();

    // Return
    return parseInt(text.split('/')[0]);
  }
})(); /* End of: [BMG.studio] Journey prev/ next year script */
