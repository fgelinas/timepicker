/* Slovak localization for the timepicker plugin */
/* Written by Erich Stark (erich at stark.codes). */
jQuery(function ($) {
    $.timepicker.regional['sk'] = {
        hourText: 'Hodiny',
        minuteText: 'Minúty',
        amPmText: ['dop.', 'pop.'],
        closeButtonText: 'Zavrieť',
        nowButtonText: 'Teraz',
        deselectButtonText: 'Odznačit'
    };
    $.timepicker.setDefaults($.timepicker.regional['sk']);
});  