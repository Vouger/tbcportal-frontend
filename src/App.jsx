import React from "react";
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {createMuiTheme, StylesProvider, ThemeProvider} from "@material-ui/core";
import { ApolloProvider } from '@apollo/client';

import client from './shared/http'
import history from './shared/history'
import Routes from './Routes'

import 'react-toastify/dist/ReactToastify.css'

import styles from './App.module.scss'

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#5b1a10'
            },
            secondary: {
                main: '#f8b700'
            },
            outlined: {
                main: '#5b1a10'
            },
            text: {
                default: '#fff',
                primary: '#fff',
                secondary: '#fff',
                disabled: '#fff',
                hint: '#fff',
            },
            background: {
                default: '#f8b700',
                paper: "#020405"
            },
            action:{
                active: '#f8b700',
                selected: '#f8b700',
                hover: '#f8b700',
            },
            divider: "#0f0"
        },

        typography: {
            allVariants: {
                color: '#fff',
            }
        },

        overrides: {
            MuiOutlinedInput: {
                notchedOutline: {
                    borderColor: '#5b1a10',
                },
            }
        }
    });

    return (
        <ApolloProvider client={client}>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                <Router history={history}>
                    <div className={styles.app}>
                        <Routes/>
                        <ToastContainer/>
                    </div>
                </Router>
                </ThemeProvider>
            </StylesProvider>
        </ApolloProvider>
    );
}

export default App;
