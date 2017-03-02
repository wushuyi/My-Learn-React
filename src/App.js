import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Button, Rate, DatePicker, Pagination} from 'antd';

const {MonthPicker, RangePicker} = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Button type='primary'>Button</Button>
                <div>
                    <Rate />
                </div>
                <div>
                    <DatePicker onChange={onChange}/>
                    <br />
                    <MonthPicker onChange={onChange} placeholder="Select month"/>
                    <br />
                    <RangePicker onChange={onChange}/>
                </div>
                <div>
                    <Pagination defaultCurrent={6} total={500}/>
                </div>
            </div>
        );
    }
}

export default App;
