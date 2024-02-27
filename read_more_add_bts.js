
$(document).ready(function () {
    $('.read-more-btn').click(function () {

        $(this).next('.text').toggleClass('show-more');

        $(this).next('.text').toggleClass('white-background');




        if ($(this).text() === 'Dermatological Conditions +') {
            $(this).text('Dermatological Conditions -');
        } else if ($(this).text() === 'Dermatological Conditions -') {
            $(this).text('Dermatological Conditions +');
        }

        if ($(this).text() === 'Mental Health +') {
            $(this).text('Mental Health -');
        } else if ($(this).text() === 'Mental Health -') {
            $(this).text('Mental Health +');
        }

        if ($(this).text() === 'Musculoskeletal Health +') {
            $(this).text('Musculoskeletal Health -');
        } else if ($(this).text() === 'Musculoskeletal Health -') {
            $(this).text('Musculoskeletal Health +');
        }

        if ($(this).text() === 'Respiratory Health +') {
            $(this).text('Respiratory Health -');
        } else if ($(this).text() === 'Respiratory Health -') {
            $(this).text('Respiratory Health +');
        }

        if ($(this).text() === 'Chronic Diseases +') {
            $(this).text('Chronic Diseases -');
        } else if ($(this).text() === 'Chronic Diseases -') {
            $(this).text('Chronic Diseases +');
        }

        if ($(this).text() === 'Pain Management +') {
            $(this).text('Pain Management -');
        } else if ($(this).text() === 'Pain Management -') {
            $(this).text('Pain Management +');
        }

        if ($(this).text() === 'Digestive Health +') {
            $(this).text('Digestive Health -');
        } else if ($(this).text() === 'Digestive Health -') {
            $(this).text('Digestive Health +');
        }

        if ($(this).text() === 'General Wellness +') {
            $(this).text('General Wellness -');
        } else if ($(this).text() === 'General Wellness -') {
            $(this).text('General Wellness +');
        }

        if ($(this).text() === 'Other +') {
            $(this).text('Other -');
        } else if ($(this).text() === 'Other -') {
            $(this).text('Other +');
        }

    });
});