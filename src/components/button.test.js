//const { default: Button } = require("./button");

/*import React from 'react'
import {render,fireEvent} from '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import Button from './button';
test('Render button with Label', ()=>{
    const {getByText}=render(
        <Button label="Click me"/>
    )
        const buttonElement=getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    
})
//class name
/*test('ClassName btn present ',()=>{
    const {container}=render(
        <Button label="Click me"/>
    )
})*/
import { render, fireEvent } from '@testing-library/react'; 
const mockFun=jest.fn();
test('fun',()=>{
    mockFun();
    mockFun();
    expect(mockFun).toHaveBeenCalledTimes(2);
})
//fireEvent to click my button
test('Button is Clicked',()=>{
    const onClickMock=jest.fn();
    const button=render(
    <Button label="Click me" onClick={onClickMock}/>
 )
    const buttonElement=button.getByText('Click me');
    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1);
})