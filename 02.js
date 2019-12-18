function createTag (nameTag) {
    return document.createElement(nameTag)
}
function addTag (nameTag) {
    document.body.append(createTag(nameTag))
}