function totalWordCount(text) {
    return text.length;
};

function uniqueWordCount(text) {
    var words = {};
    var uniqueWord = 0;

    for (var i = 0; i < text.length; i++) {
        if (words[text[i]]) {
            words[text[i]] += 1;
        } else {
            words[text[i]] = 1;
        }
    }

    for (var word in words) {
        if (words[word] === 1) {
            uniqueWord++;
        }
    }

    return uniqueWord;
}

function avgWordLength(text) {
    var length = 0;

    for (i = 0; i < text.length; i++) {
        length = length + text[i].length;
    }

    return length / text.length;
}

$('form').submit(function(event) {
    event.preventDefault();

    var text = $(this).find('#user-text').val().trim().split(' ');

    $('dl').removeClass('hidden');
    $('.text-report').find('.total-word-count').text(totalWordCount(text));
    $('.text-report').find('.unique-word-count').text(uniqueWordCount(text));
    $('.text-report').find('.avarage-word-count').text(avgWordLength(text));
})