/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useParams } from 'react-router-dom';
const WithRouter = Component => props => {
    const params = useParams()
    return (
        <Component params={params} {...props} />
    );
}


export default WithRouter;