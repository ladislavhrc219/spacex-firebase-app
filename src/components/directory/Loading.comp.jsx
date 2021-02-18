import React, {useState} from 'react';

// import App from './App';

const Loading =() => {

    const [loading, setLoading] = useState("");

    const spacex = " spacex hot data...  ";


    return (
        <div className="loading">
            <h3> {spacex} is Loading... </h3>
        </div>
    );
}

export default Loading;