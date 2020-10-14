;(function () {
    var $html = document.querySelector('html');

    var sp = matchMedia('(max-width: 600px)');
    var pc = matchMedia('(min-width: 601px)');
    var pc_limit = matchMedia('(min-width:1920px)');
    var pc_header = matchMedia('(min-width: 601px) and (max-width:1500px)');
    var pc_small = matchMedia('(min-width: 601px) and (max-width:1280px)');
    var pc_small_l = matchMedia('(min-width: 601px) and (max-width:1080px)');
    var tablet = matchMedia('(min-width: 601px) and (max-width:1059px)');
    var tablet_p = matchMedia('(min-width: 601px) and (max-width:1023px)');
    var middle = matchMedia('(min-width: 601px) and (max-width:740px)');

    handle_sp();
    handle_pc();
    handle_pc_limit();
    handle_pc_header();
    handle_pc_small();
    handle_pc_small_l();
    handle_tablet();
    handle_tablet_p();
    handle_middle();

    sp.addListener(handle_sp)
    pc.addListener(handle_pc)
    pc_limit.addListener(handle_pc_limit)
    pc_header.addListener(handle_pc_header)
    pc_small.addListener(handle_pc_small)
    pc_small_l.addListener(handle_pc_small_l)
    tablet.addListener(handle_tablet)
    tablet_p.addListener(handle_tablet_p)
    middle.addListener(handle_middle)

    function handle_pc() {
        if (pc.matches) {
            $html.classList.add('-device-pc');
        } else if (!pc.matches) {
            $html.classList.remove('-device-pc');
        }
    }
    function handle_pc_limit() {
        if (pc_limit.matches) {
            $html.classList.add('-device-pc_limit');
        } else if (!pc_limit.matches) {
            $html.classList.remove('-device-pc_limit');
        }
    }
    function handle_pc_header() {
        if (pc_header.matches) {
            $html.classList.add('-device-pc_header');
        } else if (!pc_header.matches) {
            $html.classList.remove('-device-pc_header');
        }
    }
    function handle_pc_small() {
        if (pc_small.matches) {
            $html.classList.toggle('-device-pc_small');
        } else if (!pc_small.matches) {
            $html.classList.remove('-device-pc_small');
        }
    }
    function handle_pc_small_l() {
        if (pc_small_l.matches) {
            $html.classList.toggle('-device-pc_small_l');
        } else if (!pc_small_l.matches) {
            $html.classList.remove('-device-pc_small_l');
        }
    }
    function handle_tablet() {
        if (tablet.matches) {
            $html.classList.toggle('-device-tablet');
        } else if (!tablet.matches) {
            $html.classList.remove('-device-tablet');
        }
    }
    function handle_tablet_p() {
        if (tablet_p.matches) {
            $html.classList.toggle('-device-tablet_p');
        } else if (!tablet_p.matches) {
            $html.classList.remove('-device-tablet_p');
        }
    }
    function handle_middle() {
        if (middle.matches) {
            $html.classList.add('-device-pc_middle');
        } else if (!middle.matches) {
            $html.classList.remove('-device-pc_middle');
        }
    }
    function handle_sp() {
        if (sp.matches) {
            $html.classList.add('-device-sp');
        } else if (!sp.matches) {
            $html.classList.remove('-device-sp');
        }
    }
}());
