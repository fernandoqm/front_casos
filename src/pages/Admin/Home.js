import React, { useState, useEffect } from 'react';
import http from '../../http/http-common';

function Home() {
    const [data, setData] = useState("default");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token)
        {
            http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }


    });
}

export default Home;