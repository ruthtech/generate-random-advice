import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Randomizer(props) {
    const [state, setState] = useState();
    const [advice, setAdvice] = useState();
    
    useEffect(() => {
        // called setState only to trigger this method
        fetchAdvice();
    }, [state]);

    async function fetchAdvice() {
        let response = await axios.get('/express_backend');
        // console.log(response.data);
        setAdvice(response.data.slip.advice);
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                <Card>
                    <Card.Body>Survey says ... {advice}</Card.Body>
                </Card>
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                   <Button variant="secondary" onClick={() => {setState(!state);}}>Generate random advice</Button>
                </div>
            </div>
        </div>
    );
}

export default Randomizer;
