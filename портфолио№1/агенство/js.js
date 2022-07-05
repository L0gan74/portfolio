function readyElem(elem, isOpen, width1, width2, height1, height2) {
    let object = elem;
    let itIsOpen = isOpen || false;
    let beforeWidth = width1 || '2px';
    let afterWidth = width2 || '100vw';

    let openBtn = object.openBtn;
    let closeBtn = object.closeBtn;
    let background = object.background;
    let content = object.content;

    openBtn.on('click', function(e) {
        if (!itIsOpen) {
            background.animate(
                // keyframes
                {
                    top: '0',
                    right: '0',
                    width: afterWidth,
                    height: '100vh',
                }, {
                    // timing options
                    duration: 700,
                }
            );
            content.animate({ opacity: '1' }, 1000);
            itIsOpen = true;
        } else {
            itIsOpen = false;
            background.animate(
                // keyframes
                {
                    right: '-2px',
                    width: '2px',
                    height: '2px',
                }, {
                    // timing options
                    duration: 1000,
                }
            );
            content.animate({ opacity: '0' }, 400);
        }
    });
    closeBtn.on('click', function() {
        if (!itIsOpen) {
            itIsOpen = true;
            $('.menuBackground').animate(
                // keyframes
                {
                    top: '0',
                    right: '0',
                    width: '100vw',
                    height: '100vh',
                }, {
                    // timing options
                    duration: 1000,
                }
            );
            content.animate({ opacity: '1' }, 1000);
        } else {
            itIsOpen = false;
            $('.menuBackground').animate(
                // keyframes
                {
                    right: '-2px',
                    width: '2px',
                    height: '2px',
                }, {
                    // timing options
                    duration: 1000,
                }
            );
            content.animate({ opacity: '0' }, 400);
        }
    });
}

let menu = {
    openBtn: $('.openMenu'),
    closeBtn: $('.close'),
    background: $('.menuBackground'),
    content: $('.menuBackgroundContent'),
};

readyElem(menu);

let forma = {
    openBtn: $('.openForm'),
    closeBtn: $('.closeForm'),
    background: $('.fsdgfdg'),
    content: $('.formBackgrounfgfgrgdfsnt'),
};

readyElem(forma);


var swiper = new Swiper(".mySwiper", {});