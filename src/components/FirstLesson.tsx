import React from 'react';
import styled from "styled-components";
import './../App.css';

export const FirstLesson = () => {
    return (
        <>
            <Title>Styled-components <span>.attrs</span> method</Title>
                <Form>
                    <Field/>
                    <Field/>
                    <Field/>
                    <FieldNew/>
                    <FieldNew type={'checkbox'}/>
                </Form>
              </>
    );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;

  span {
    color: #e91e63;
  }
`;
const Form = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
`;

type PropsType = {
    type?: string
}

const FieldNew = styled.input.attrs((props: PropsType) => ({
    type: props.type || 'password'
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Field = styled.input`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;
