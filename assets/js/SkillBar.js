jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({ width: jQuery(this).attr('data-percent') }, 3000);
    });
});

jQuery(document).ready(function() {
    jQuery('.skillbar2').each(function() {
        jQuery(this).find('.skillbar-bar2').animate({ width: jQuery(this).attr('data-percent') }, 3000);
    });
});