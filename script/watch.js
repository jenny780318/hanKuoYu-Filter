// Author: Max Yi-Hsun Chou <yihsunmaxchou@icloud.com>
// Github: https://github.com/maxchou415

$('#rootElementId div:contains('韓國瑜', '韓市長', '韓總', '國瑜', '韓流', '韓粉', '韓導')).remove()
const blocklist = ['韓國瑜', '韓市長', '韓總', '國瑜', '韓流', '韓粉', '韓導', '發大財']
const templateHtml = '<div>發大財<div>

  $('#rootElementId div:contains('韓國瑜', '韓市長', '韓總', '國瑜', '韓流', '韓粉', '韓導')).childern('.userContentWrapper').html(templateHtml)
  
    blocklist.forEach(text=>{
  $('#rootElementId div:contains('+'" '+text+'"'+)').childern('.userContentWrapper').html(templateHtml)

const contentFromPosts = document.querySelector('#contentArea')
const contentFromPages = document.querySelector('#pagelet_timeline_main_column')
const content = contentFromPosts || contentFromPages

function removeElems () {
  const articles = content.querySelectorAll(`div[id][role="article"]`)

  function hasSensitiveWordInBlocklist (article) {
    return blocklist.some((sensitiveWord) => article.innerHTML.includes(sensitiveWord))
  }

  articles.forEach(function (article) {
    if (hasSensitiveWordInBlocklist(article)) {
      article.innerHTML = templateHtml
    }
  })
}

content.addEventListener('DOMContentLoaded DOMSubtreeModified', function (event) {
  removeElems()
})

content.addEventListener('DOMNodeInserted', function (event) {
  removeElems()
})

content.addEventListener('DOMSubtreeModified', function (event) {
  removeElems()
})
  $('#rootElementId').blind('DOMContentLoaded DOMSubtreeModifiend', function (event){
    // Do Remove Function
  })
