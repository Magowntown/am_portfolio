// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials.js'
import about from './abouts.js'
import brands from './brands.js'
import contact from './contact.js'
import experiences from './experiences.js'
import skills from './skills.js'
import works from './works.js'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        testimonials,
        about,
        brands,
        contact,
        experiences,
        skills,
        works,
    ]),
})