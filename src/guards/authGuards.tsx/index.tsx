import React, { ReactNode, useEffect } from 'react';

interface IAuthGuards {
    component: ReactNode
}

const AuthGuard = ({component}: IAuthGuards) => {
    useEffect(() => {
        console.log("Auth Guard");
    }, []);

    return <React.Fragment>{component}</React.Fragment>
}

export default AuthGuard;