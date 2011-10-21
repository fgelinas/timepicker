/* Deutsch initialisation for the timepicker plugin */
/* Written by Bernd Plagge (bplagge@choicenet.ne.jp). */
jQuery(function($){
    $.timepicker.regional['de'] = {
                hourText: 'Stunde',
                minuteText: 'Minuten',
                amPmText: ['AM', 'PM'] ,
                closeButtonText: 'Schließen',
                nowButtonText: 'Akt. Uhrzeit',
                deselectButtonText: 'Entmarkieren' }
    $.timepicker.setDefaults($.timepicker.regional['de']);
});