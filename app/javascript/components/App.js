import React from 'react';
import { useEffect, useState } from "react";
import Greeting from './greeting';
import axios from 'axios';

const API_URL = "/api/v1/greetings/random";

const getData = () => {
    return axios.get(API_URL).then((response) => {
        return response.data;
    })
}

const App = () => {
    const [greeting, setGreeting] = useState([]);

    useEffect(() => {
        let mounted = true;
        getData().then((item) => {
            if (mounted) {
                setGreeting(item);
            }
        })
        return () => (mounted = false);
    }, []);

    return (<main>
        <h1>Random Greeting</h1>
        <Greeting greeting={greeting}></Greeting>
    </main>);
}

export default App;