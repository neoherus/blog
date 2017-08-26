var $nav = document.querySelector('.sidebar ul'),
    $h1s = document.getElementsByTagName('h1');

$h1s.forEach(function (element) {
    let $li = document.createElement('li'),
        $a = document.createElement('a');
    element.id = element.innerText.replace(' ', '-');
    $a.innerText = element.innerText;
    $a.href = '#' + element.id;
    $a.title = element.innerText;
    $a.dataset.scroll = '';
    $li.appendChild($a);
    $nav.appendChild($li);
    if ($a.offsetWidth > $nav.offsetWidth - 20) $a.addClass('overflow');
});

var current = null,
    viewHight = window.innerHeight,
    offsetTopRate = 0.20,
    $article = document.querySelector('article');

function isOutOfTop () {
    var offsetTop = viewHight * offsetTopRate,
        scrollTop = document.body.scrollTop;
    return (scrollTop + offsetTop) < $h1s[0].getPosTop();
}

function isOutOfBottom () {
    var offsetTop = viewHight * offsetTopRate,
        scrollTop = document.body.scrollTop;
    return (scrollTop + offsetTop) > ($article.getPosTop() + $article.offsetHight);
}

window.addEventListener('scroll', function () {
    var _this = this,
        $body = document.body;

    if (isOutOfTop() || isOutOfBottom()) {
        current && current.removeClass('current');
        current = null;
        return;
    }
    $h1s.forEach(function (element) {
        if (($body.scrollTop + viewHight * offsetTopRate) >= element.getPosTop()) {
            if (!current || (current.innerText !== element.innerText)) {
                current && current.removeClass('current');
                current = $('a[title="' + element.innerText + '"]');
                current && current.addClass('current');
            }
        } else {
            return false;
        }
    })
})

window.addEventListener('scroll', function () {
    const backRate = 0.2;
    if (document.body.scrollTop / document.body.scrollHeight >= 0.2) {
        $('#back-to-top').style.display = 'block';
    } else {
        $('#back-to-top').style.display = 'none';
    }
});

$('#nav').addEventListener('click', function () {
    $('.sidebar').style.display = ($('.sidebar').style.display === 'block') ? 'none' : 'block';
});