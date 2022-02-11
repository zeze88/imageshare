import React from 'react';
import styled from 'styled-components';

import { ImgList } from '../components/index.js';

const Main = props => {
    return (
        <React.Fragment>
            <MainContainer>
                <ImgList />
            </MainContainer>
        </React.Fragment>
    );
};

const MainContainer = styled.div`
    height: 100vh;
`;

export default Main;
