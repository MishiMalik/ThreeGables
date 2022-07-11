// Side-Bar//Filter Bar
function openNav() {
    document.getElementById("mySidenav").style.width = "550px";
    document.getElementById("backdrop").style.display = 'flex';
    document.getElementById("body").style.overflowY = 'hidden';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("backdrop").style.display = 'none';
    document.getElementById("body").style.overflowY = 'scroll';
}




$('.carousel').on('slide.bs.carousel', function(e){

    $('[data-bs-slide-to="'+ e.to +'"]').siblings().removeClass('add-border').end().addClass('add-border')
});
