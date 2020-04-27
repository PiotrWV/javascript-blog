'use strict';

const titleClickHandler = function (event) {

    event.preventDefault;
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {

        activeLink.classList.remove('active');

    }

    /* add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {

        activeArticle.classList.remove('active');

    }

    /* get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');

    console.log(articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */


    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

}

const optArticleSelctor = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log(titleList);
    titleList.innerHTML = '';



    /* for each article */

    let html = '';
    const articles = document.querySelectorAll(optArticleSelctor + customSelector);

    for (let article of articles) {

        /* get the article id */

        const articleId = article.getAttribute('id');

        /* find the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;

        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

        /* insert link into titleList */

        html = html + linkHTML;
        console.log(html);
    }

    titleList.innerHTML = html;

}
generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}



function generateTags() {
    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelctor);

    /* START LOOP: for every article: */

    for (let article of articles) {

        /* find tags wrapper */

        const titleList = article.querySelector(optArticleTagsSelector);

        /* make html variable with empty string */

        let html = '';

        /* get tags from data-tags attribute */

        const articleTags = article.getAttribute("data-tags");
        console.log(articleTags);

        /* split tags into array */

        const articleTagsArray = articleTags.split(' ');
        console.log(articleTagsArray);

        /* START LOOP: for each tag */

        for (let tag of articleTagsArray) {

            console.log(tag);

            /* generate HTML of the link */

            const linkHTML = '<li><a href="#tags-" +articleId></a</li>';

            /* add generated code to html variable */

            /* END LOOP: for each tag */
        }
        /* insert HTML of all the links into the tags wrapper */

        titleList.innerHTML = html;

        /* END LOOP: for every article: */

    }


}

generateTags();



function tagClickHandler(event) {
    /* prevent default action for this event */

    event.preventDefault;

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag"]');

    /* START LOOP: for each active tag link */

    for (let tags of activeTagLinks) {

        /* remove class active */

        tags.classList.remove('active');

        /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = document.querySelectorAll('.post-tags a[href*=' + tag + ']');

    /* START LOOP: for each found tag link */

    for (let link of tagLinks) {

        /* add class active */

        link.classList.add('active');

        /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');

}


function addClickListenersToTags() {
    /* find all links to tags */

    const linksToTag = document.querySelectorAll(optArticleTagsSelector);

    /* START LOOP: for each link */

    for (let list of linksToTag) {

        /* add tagClickHandler as event listener for that link */

        list.addEventListener('click', tagClickHandler);
        console.log(list);


        /* END LOOP: for each link */
    }
}

addClickListenersToTags();

function generateAuthors() {

    const authors = document.querySelector(optArticleAuthorSelector);
    const articleAuthors = authors.getAttribute('data-author');
    console.log(articleAuthors);


}

generateAuthors();

function addClickListenersToAuthors() {



}

function authorClickHandler() {

    event.preventDefault;
    const clickElemnt = this;

}
