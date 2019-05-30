
$(document).ready(function() {

    $("input[data-enableawesomeplete=1]").each(function() {
        initAwesomplete($(this));
    });

    $(document).on('reloaded opened repeateradd wiretabclick', '.InputfieldText', function() {
        $(this).find("input[data-enableawesomeplete=1]").each(function() {
        initAwesomplete($(this));
        });
    });
});


var initAwesomplete = function($textField) {
    var thisID = $textField.attr('id');
    var optsID = thisID.split('_repeater')[0];

    var thisOpts = 'TextInputAwesomplete.' + optsID;
    eval('var selectOptions=config.'+thisOpts);

    var input = document.getElementById(thisID);
    var awesomplete = new Awesomplete(input);

    awesomplete.list = selectOptions;
}

