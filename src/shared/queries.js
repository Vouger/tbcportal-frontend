import { gql } from '@apollo/client'

export class Queries {
    static LOGIN = gql`
        mutation Login($email: String!, $password: String!, $remember: Boolean!) {
            login (data: { email: $email, password: $password, remember: $remember }) {
                email
                token
            }
        }
    `;

    static CONFIRMATION = gql`
        mutation Confirmation($token: String!) {
            confirmation (data: { token: $token }) {
                email
                token
            }
        }
    `;

    static REGISTRATION = gql`
        mutation Registration($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
            register (
                data: {
                    email: $email,
                    password: $password,
                    firstname: $firstname,
                    lastname: $lastname
                }
            ){
                email
            }
        }
    `;

    static GOOGLE = gql`
        mutation GoogleAuth($token: String!) {
            googleAuth (data: { token: $token }) {
                email
                token
            }
        }
    `;

    static PASSWORD_REQUEST = gql`
        mutation PasswordRequest($email: String!) {
            passwordRequest (data: { email: $email }) {
                email
            }
        }
    `;

    static PASSWORD_CHANGE = gql`
        mutation PasswordChange($token: String!, $password: String!) {
            passwordChange (data: { token: $token, password: $password }) {
                email
                token
            }
        }
    `;

    static GET_GUIDES = gql`
        query guides ($filterClass: String!) {
            guides (filterClass: $filterClass) {
                id
                title
                text
                views
            }
        }
    `;

    static GET_GUIDE = gql`
        query guide ($id: String!) {
            guide (id: $id) {
                id
                title
                text
            }
        }
    `;
}