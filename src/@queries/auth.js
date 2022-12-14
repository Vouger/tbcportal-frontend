import {gql} from "@apollo/client";

export default class Auth {
    static LOGIN = gql`
        mutation Login($email: String!, $password: String!, $remember: Boolean!) {
            login (data: { email: $email, password: $password, remember: $remember }) {
                email
                role
                token
            }
        }
    `;

    static CONFIRMATION = gql`
        mutation Confirmation($token: String!) {
            confirmation (data: { token: $token }) {
                email
                role
                token
            }
        }
    `;

    static REGISTRATION = gql`
        mutation Registration($email: String!, $password: String!, $nickname: String!) {
            register (
                data: {
                    email: $email,
                    password: $password,
                    nickname: $nickname
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
                role
                token
            }
        }
    `;

    static SOCIAL = gql`
        mutation SocialAuth($source: String!, $code: String!) {
            socialAuth (data: { source: $source, code: $code }) {
                email
                role
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
                role
                token
            }
        }
    `;
}