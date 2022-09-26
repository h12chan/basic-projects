// cross-platform bookmark manager with a single code base written in JavaScript
// expand your social interest with common 'cartons' (sort by visited web domains/tag/subset of title, then see ppl with same interests' other bookmarks)
// Carton Bookmark Discovery
const dbBookmarks = []
function getTag(bookmark) {
	const tags = bookmark.tag.split(",")
  return tags
}
function importBookmarks(bookmarks){
	dbBookmarks.concat(bookmarks)
  return bookmarks
}
function setBookmark(url, title, description='', tag='') {
  const bookmark = {'url':url, 'title':title, 'description':description, 'tag':tag}
  dbBookmarks.push(bookmark)
}
function getBookmarks(bookmarks) {
	bookmarks.forEach(function(bookmark){
  	console.log(`
title is: ${bookmark.title}
url is: ${bookmark.url}
description is: ${bookmark.description}
tag is: ${bookmark.tag}`)
  })
}
setBookmark('www.google.com','Google Search Engine','','search engine,bestest,bff')
setBookmark('www.yahoo.com','Yahoo Directory','','directory,bff')
setBookmark('www.cnet.com','CNET Tech News','','tech news')
getBookmarks(dbBookmarks)
