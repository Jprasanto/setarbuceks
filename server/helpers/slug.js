function generateSlug(name) {
    const slug = name?.toLowerCase().split(" ").join("-")
    return slug
}

module.exports = generateSlug