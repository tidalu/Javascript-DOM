// Your JavaScript code goes here

const title = document.getElementById('title');

//change the outeerhtml

title.outerHTML = '<div id="dom">changed OuterHtml</div>';
const outerHtml = title?.outerHTML;
console.log(outerHtml);
