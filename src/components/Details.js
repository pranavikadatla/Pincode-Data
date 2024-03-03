import React, { useState, useEffect } from 'react';

const Details = ({ number, data }) => {
    const [search, setSearch] = useState('');
    const [name, setName] = useState(data.PostOffice ? data.PostOffice : []);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
        setSearch(search.trim());
        if (search) {
            const filteredNames = data.PostOffice.filter(item =>
                item.Name.toLowerCase().includes(search.toLowerCase())
            );
            if(!filteredNames.length){
             setMessage("Couldn’t find the postal data you’re looking for…")
             setName("");
            }
   
            setName(filteredNames);
        } else {
            setName(data.PostOffice);
        }
    }, [search, data.PostOffice]);
    useEffect(() => {
        if (data && data.Error) {
            setError(data.Error);
        }
    }, [data]);
    return (
        <div>
            <h1>Pincode: {number}</h1>
            {error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    <div>Message: {data.Message}</div>
                    <input type="text" placeholder="Filter" onChange={e => setSearch(e.target.value)} value={search} />
                    <div className="dataStyles">
                        {name?.length < 1 ? (
                            <h1>{message}</h1>
                        ) : (
                            name?.map((item, index) => (
                                <div className="data" key={index}>
                                    <div className="outerStyle">
                                        <div className="width-inner">Name:</div>
                                        <div>{item.Name}</div>
                                    </div>
                                    <div className="outerStyle">
                                        <div className="width-inner">Branch Type:</div>
                                        <div>{item.BranchType}</div>
                                    </div>
                                    <div className="outerStyle">
                                        <div className="width-inner">Delivery Status:</div>
                                        <div>{item.DeliveryStatus}</div>
                                    </div>
                                    <div className="outerStyle">
                                        <div className="width-inner">District:</div>
                                        <div>{item.District}</div>
                                    </div>
                                    <div className="outerStyle">
                                        <div className="width-inner">State:</div>
                                        <div>{item.Circle}</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Details;
