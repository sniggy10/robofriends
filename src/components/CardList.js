import React from 'react';
import Card from './Card.js'

const CardList = ({robots})=>{
    // const CardComponent = robots.map((user,i)=>{
    //     return <Card key ={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    // });
    const CardComponent = robots.map(user=>{
            return (
                <Card 
                key ={user.id} 
                id={user.id} 
                name={user.name} 
                email={user.email}/>
            )
        });
    return(
    <div>
      {CardComponent}
    </div>
    );
}


export default CardList;