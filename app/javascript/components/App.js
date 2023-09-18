import React from 'react';
import Greetings from "./components/greetings";
import { useEffect, useState } from "react";

const API_URL = "/api/v1/greetings";

const getData = () => {
    return axios.get(API_URL).then((response) => {
        return response.data;
    })
}

const App = () => {
    const [greetings, setGreetings] = useState([]);

    useEffect(() => {
        let mounted = true;
        getData().then((items) => {
            if (mounted) {
                setGreetings(items);
            }
        })
        return () => (mounted = false);
    }, []);

    return (<main>
        <h1>Greetings</h1>
        <Greetings greetings={greetings}></Greetings>
    </main>);
}

export default App;