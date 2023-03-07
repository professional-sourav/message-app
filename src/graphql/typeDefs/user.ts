const typeDefs = `#graphql

    type User {
        id: String
        username: String
        name: String
        email: String
    }

    type Query {
        searchUsers(uername: String): [User]
    }

    type Mutation {
        createUsername(username: String): CreateUsernameResponse
    }

    type CreateUsernameResponse {

        success: Boolean,
        error: String
    }
`

export default typeDefs;