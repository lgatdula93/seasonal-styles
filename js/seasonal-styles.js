/*
    Deliverables: Using jQuery, create a page that promotes a unique look and feel for each of the four seasons by changing a page in the 4 following areas:

    A unique color scheme, for example stylesheet or background color, etc.
    A unique logo, for example a picture of a snowflake for winter, etc.
    A unique item of clothing, for example a parka for winter.
    A unique string of text identifying the season, for example "Leap into our Fall Wear!"
*/

const SEASONS = {
    default: {
        quote: "Dress well all season long!",
        css: "css/default.css",
        logo: "images/four-seasons.gif",
        wear: "images/300x400.png",
    },
    
    fall: {
        quote: "This <strong>FALL</strong>, be-leaf in yourself and your fashion choices.",
        css: "css/fall.css",
        logo: "images/fall.gif",
        wear: "images/fall-wear.jpg",
    },

    spring: {
        quote: "<strong>SPRING</strong> into action and bloom with fashion-forward choices.",
        css: "css/spring.css",
        logo: "images/spring.gif",
        wear: "images/spring-wear.jpg",
    },

    summer: {
        quote: "Don't be a <strong>SUMMER</strong> fling; let your style sizzle all season long.",
        css: "css/summer.css",
        logo: "images/summer.gif",
        wear: "images/summer-wear.jpg",
    },

    winter: {
        quote: "<strong>WINTER</strong>'s here, so SNOW problem dressing well!",
        css: "css/winter.css",
        logo: "images/winter.gif",
        wear: "images/winter-wear.jpg",
    }
}




$("document").ready(function() {
    $("document").ready(function(){
        $('.seasons a').click(function(e){//find all a tags inside class of seasons
            e.preventDefault();//stop default submission
            let season = $(this).attr("href");//contents of href attribute of this element
            // alert(season);
                
            
            let {quote, css, logo, wear} = SEASONS[season]

            //update stylesheet
            $('link#season-css').attr("href",css)

            //update quote
            $('h2#season-quote').html(quote)

            //update logo image
            $('img#logo').attr("src", logo)

            //update wear image
            $('img#wear').attr("src", wear)

            });
        });
    });