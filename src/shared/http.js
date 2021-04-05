import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

import {cleanAuth, getAuth} from "./helpers";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            toast.error(message)
        );

    if (networkError) toast.error(networkError)
});

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_BACKEND_URL
});

const authLink = setContext((_, { headers }) => {
    let auth = getAuth();
    let token = auth.token;

    if (token) {
        const { exp } = jwt_decode(token);

        if (exp * 1000 < Date.now()) {
            cleanAuth();
        }
    }

    auth = getAuth();
    token = auth.token;

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache()
});

export default client