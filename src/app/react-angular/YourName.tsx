import React, {useEffect} from 'react';
import styled from "styled-components";

const Root = styled.div`
  border: 1px solid red;
  padding: 1rem;
`;

export interface YourNameProps {
    name: string;
    onUpdate: (newValue: string) => void;
}

export function YourName(props: YourNameProps) {
    const {name, onUpdate} = props;
    useEffect(()=>{
        return ()=> console.log("App is going down")
    },[])
    return <Root>
        <h1>React World</h1>
        Your react name is {name}
        <div>Change it!</div>
        <input value ={name} onChange={e=>onUpdate(e.target.value)}/>

    </Root>;
}
