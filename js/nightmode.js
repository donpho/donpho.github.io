(function () {
    const d = new Date();
    let userHour = d.getHours();
    const nightmode = () => {
        $('body').toggleClass('nightmodeBody');
        $('.content').toggleClass('nightmodeContent');
    };
    if (userHour < 7 || userHour > 21) nightmode();
})();



