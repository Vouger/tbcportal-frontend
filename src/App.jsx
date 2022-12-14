import React from "react";
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {createMuiTheme, StylesProvider, ThemeProvider} from "@material-ui/core";
import { ApolloProvider } from '@apollo/client';

import client from 'shared/http'
import history from 'shared/history'
import Routes from './Routes'

import 'react-toastify/dist/ReactToastify.css'

import styles from './App.module.scss'

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#3c5077'
            },
            secondary: {
                main: '#f8b700'
            },
            outlined: {
                main: '#3c5077'
            },
            text: {
                default: '#fff',
                primary: '#fff',
                secondary: '#fff',
                disabled: '#fff',
                hint: '#fff',
            },
            background: {
                default: '#201815',
                paper: "#14183f"
            },
            action: {
                active: '#f8b700',
                selected: '#f8b700',
                hover: '#f8b700',
            },
            divider: "#f8b700"
        },

        typography: {
            allVariants: {
                color: '#fff',
            }
        },

        overrides: {
            MuiOutlinedInput: {
                notchedOutline: {
                    borderColor: '#3c5077',
                },
            }
        }
    });

    return (
        <ApolloProvider client={client}>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                <BrowserRouter history={history}>
                    <div className={styles.app}>
                        <Routes/>
                        <ToastContainer/>
                    </div>
                </BrowserRouter>
                </ThemeProvider>
            </StylesProvider>
        </ApolloProvider>
    );
}

export default App;
