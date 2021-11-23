import { accountFragment } from "./fragments"
export const getUserById = (userFragment: string) => /* GraphQL */ `
  query getUserById($id: ID!) {
    getUser(id: $id) {
      ...UserFragment
    }
  }
  ${userFragment}
`
export const getUserByEmail = (userFragment: string) => /* GraphQL */ `
  query getUserByEmail($email: String = "") {
    queryUser(filter: { email: { eq: $email } }) {
      ...UserFragment
    }
  }
  ${userFragment}
`
export const getVerificationRequest = /* GraphQL */ `
  query getVerificationRequest($identifier: String = "", $token: String = "") {
    queryVerificationRequest(
      filter: {
        and: { identifier: { eq: $identifier }, token: { eq: $token } }
      }
    ) {
      expires
      identifier
      token
    }
  }
`
export const getAccount = /* GraphQL */ `
  query getAccount($providerAccountId: String = "", $provider: String = "") {
    queryAccount(
      filter: {
        and: {
          providerAccountId: { eq: $providerAccountId }
          provider: { eq: $provider }
        }
      }
    ) {
      ...AccountFragment
      user {
        id
      }
    }
  }
  ${accountFragment}
`
export const getUserByAccount = (userFragment: string) => /* GraphQL */ `
  query getUserByAccount(
    $providerAccountId: String = ""
    $provider: String = ""
  ) {
    queryAccount(
      filter: {
        and: {
          providerAccountId: { eq: $providerAccountId }
          provider: { eq: $provider }
        }
      }
    ) {
      user {
        ...UserFragment
      }
      id
    }
  }
  ${userFragment}
`
export const getSession = (userFragment: string) => /* GraphQL */ `
  query getSession($sessionToken: String = "") {
    querySession(filter: { sessionToken: { eq: $sessionToken } }) {
      expires
      id
      sessionToken
      user {
        ...UserFragment
      }
    }
  }
  ${userFragment}
`
