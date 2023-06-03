var commentTime = new Date('2023-05-31T16:49:27');
var now = new Date();
var diff = now - commentTime;
var minutes = Math.floor(diff / (1000 * 60));
document.querySelector('.comment-time').innerHTML = minutes + '分钟前';
$('.like-btn').on('click', function() {
    var $btn = $(this);
    var $count = $btn.find('.like-count');
    var count = parseInt($count.text()) + 1;
    $count.text(count);
  });