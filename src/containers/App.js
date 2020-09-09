import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'
import './App.css'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => { return response.json(); })
       .then(users => {  this.setState({robots : users}) })
    }


    // Arrow function used here to imply this object belongs to the place where function is created
    // not where it gets executed, which is CardList here
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render(){
        const { robots,searchField } = this.state;

        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(robots.length === 0){
            return <h1 className ='newclass tc'>LOADING</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='newclass f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>   
            )
        }
    }
}

export default App;