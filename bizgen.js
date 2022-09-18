import {getBlogPosts, addContactMessage} from './firebase_setup.js';
$( document ).ready(function() {
    console.log( "ready!" );
     // TODO: Replace the following with your app's Firebase project configuration
   
    setUpListener('businessNav', 'business');
    setUpListener('whoNav', 'who');
    setUpListener('contactNav', 'contact');
    setUpListener('homeNav', 'home');
    setUpListener('consumerNav', 'consumer');
    setUpListener('applyNav', 'apply');
    setUpListener('blogNav', 'blog');
    setUpContactForm();
    console.log('before')
    let result = getBlogPosts();
    result.then(function(posts) {
        console.log(posts)
        let htmlCollection = [];
        for(let i = 0; i < posts.length; i++) {
            let post = posts[i];
            let title = post['title'];
            let body = post['body'];
            let datetime = new Date(post['date']);
            let blogPostHTML = createBlogPost(title, body, datetime);
            htmlCollection.push(blogPostHTML);
        }
        for(let j = 0; j < htmlCollection.length; j++) {
            $('#blogPostArea').append(htmlCollection[j]);
        }
    })

   
   //addContactMessage('mac@gmail.com', 'hey there can i interest u in some business?')
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

function setUpContactForm() {
    $("#contactForm").submit(function(e) {
        e.preventDefault();
    });
    $('#submitButton').click(function(e) {
        e.preventDefault();
        let emailVal = $('#emailInput').val();
        let msgBody = $('#textAreaInput').val();
        console.log(emailVal, msgBody)
        if(msgBody.length < 300) {
            addContactMessage(emailVal, msgBody);
            alert('Message Submitted Succesfully!');
            $('#emailInput').val('');
            $('#textAreaInput').val('');
        } else {
            alert('Error, message > than 300 characters');
        }
        
    });
}

function addHashTag(string) {
    return '#' + string;
}

function createBlogPost(title, body, date, id) {
    let shortenedBody = body.substring(0,10) + '...';
    let formattedDate = date.seconds;
    const blogTemplate = `<div class="card" style="width: 25rem; margin-top:1em;">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p style="color:#afb67b">${formattedDate}</p>
        <p class="card-text" id="shortenedBody${id}">${shortenedBody}</p>
        <p class="card-text invis" id="body${id}">${body}</p>
        <a href="#" class="btn btn-primary" style="background-color:#369685; border: 1px solid #369685">Expand</a>
        </div>
    </div>`;
    return blogTemplate;
}
