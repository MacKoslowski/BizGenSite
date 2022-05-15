
$( document ).ready(function() {
    console.log( "ready!" );
    setUpListener('businessNav', 'business');
    setUpListener('whoNav', 'who');
    setUpListener('contactNav', 'contact');
    setUpListener('homeNav', 'home');
    setUpListener('consumerNav', 'consumer');
    setUpListener('applyNav', 'apply');
    setUpListener('blogNav', 'blog');
});

const Ids = ['business', 'contact', 'home', 'consumer', 'who', 'apply', 'blog'];

function selectNav(id) {
    let wrapTag = id + 'Wrap';
    let idString = addHashTag(id);
    let wrapString = addHashTag(wrapTag);
    $(idString).removeClass('invis');
    $(wrapString).addClass('active');
    console.log(idString)
    for(let i = 0; i < Ids.length; i++) {
        let thisID = Ids[i];
        if(thisID != id) {
            let thisIdString = addHashTag(thisID);
            let thisWrapString = addHashTag(thisID + 'Wrap');
           
            $(thisIdString).addClass('invis');
            $(thisWrapString).removeClass('active');
        }
    }
}

function setUpListener(navId, contentId) {
    let navIdString = addHashTag(navId);
    $(navIdString).click(function() {
        selectNav(contentId);
    });
}

function addHashTag(string) {
    return '#' + string;
}
