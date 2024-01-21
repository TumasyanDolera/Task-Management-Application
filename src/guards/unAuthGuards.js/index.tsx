import React, { ReactNode, useEffect } from 'react';

interface IAuthGuards {
    component: ReactNode
}

const UnAuthGuard = ({component}: IAuthGuards) => {
    useEffect(() => {
        console.log("UnAuth Guard");
    }, [component]);

    return <React.Fragment>{component}</React.Fragment>
}

export default UnAuthGuard;