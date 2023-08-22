import React from 'react';
import { Button } from './Props.styled';

export const Props = () => {
    return (
        <div>
            <Button background={'blue'}  color={'white'}>Button1</Button>
            <Button superStyles>Button2</Button>
        </div>
    );
};

