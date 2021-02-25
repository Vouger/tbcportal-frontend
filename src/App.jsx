import React from "react";
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { StylesProvider } from "@material-ui/core";
import { ApolloProvider } from '@apollo/client';

import client from './shared/http'
import history from './shared/history'
import Routes from './Routes'

import 'react-toastify/dist/ReactToastify.css'

import styles from './App.module.scss'

function App() {
    return (
        <ApolloProvider client={client}>
            <StylesProvider injectFirst>
                <Router history={history}>
                    <div className={styles.app}>
                        <Routes/>
                        <ToastContainer/>
                    </div>
                </Router>
            </StylesProvider>
        </ApolloProvider>
    );
}

export default App;
