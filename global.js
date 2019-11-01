(function (window, document) {
    function padZero(number) {
        return number < 10 ? '0' + number : number;
    }

    var n = window.location.href.match(/(\d+)\.html/)[1];

    var count = 20;
    var next = +n + 1;
    var prev = +n - 1;

    document.querySelector('.global-heading').innerHTML = 'Задача №' + n;

    var prevHref = padZero(next > count ? 1 : next) + '.html';
    var nextHref = padZero(prev < 1 ? count : prev) + '.html';

    document.querySelector('.global-next').href = prevHref;
    document.querySelector('.global-prev').href = nextHref;

    document.querySelector('.global-scope').classList.add('global-scope_' + n);

    var goal = document.querySelector('.global-goal');

    goal.src = '../goals/' + n + '.png';
    goal.alt = 'Цель ' + n;

    window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 37:
                window.location.href = nextHref;

                break;
            case 39:
                window.location.href = prevHref;

                break;
        }
    });
})(window, document);
