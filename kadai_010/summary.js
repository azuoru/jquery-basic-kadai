$(function() {
    // 文字色
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });

    // 内容
    $('#change-text').on('click', function() {
        $('#target').text('こんばんは！');
    });

    // フェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // フェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});