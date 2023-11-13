import mark_webber from './assets/avatar-mark-webber.webp'
import angela_gray from './assets/avatar-angela-gray.webp'
import jacob_Thompson from './assets/avatar-jacob-thompson.webp'
import Rizky_Hasanuddin from './assets/avatar-rizky-hasanuddin.webp'
import Kimberly_Smith from './assets/avatar-kimberly-smith.webp'
import image_chess from './assets/image-chess.webp'

import Nathan_Peterson from './assets/avatar-nathan-peterson.webp'

import Anna_Kim from './assets/avatar-anna-kim.webp'

import { useState } from "react"

const App = () => {


    const[notifications,setNotifications] =useState([

        {
            "id": "1",
            "author" : {
                "name" : "Mark Webber",
                "src": mark_webber,
                "href" : "#"
                
            },
            "text" : "reacted to your recent post",
            "post" : {
                "text": "My first tournament today!",
                'href' : "#"
            },
            "date" : "1m ago",
            'hasBeenRead' : false
        },

        {
            "id": "2",
            "author" : {
                "name" : 'Angela Gray',
                "src": angela_gray,
                "href" : "#"
            },
            "text" : "followed you",
           
            "date" : "5m ago",
            'hasBeenRead' : false
        },
        {
            "id": "3",
            "author" : {
                "name" : "Jacob Thompson",
                "src": jacob_Thompson,
                "href" : "#"
            },
            "text" : "has joined your group",
            "group" : {
                "text": "Chess Club",
                'href' : "#"
            },
            "date" : "1 day ago",
            'hasBeenRead' : false
        },
        {
            "id": "4",
            "author" : {
                "name" : "Rizky Hasanuddin",
                "src": Rizky_Hasanuddin,
                "href" : "#"
            },
            "text" : "sent you a private message",
            'privateMessage' : "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and  I'm already having lots of fun and improving my game.",
            "date" : "5 days ago",
            'hasBeenRead' : true
        },
        {
            "id": "5",
            "author" : {
                "name" : "Kimberly Smith ",
                "src": Kimberly_Smith,
                "href" : "#"
            },
            "text" : "commented on your picture",
           "picture" :{
                'src': image_chess
           },
            "date" : "1 week ago",
            'hasBeenRead' : true
        },
        {
            "id": "6",
            "author" : {
                "name" : "Nathan Peterson",
                "src": Nathan_Peterson,
                "href" : "#"
            },
            "text" : "reacted to your recent post",
            "post" : {
                "text": "5 end-game strategies to increase your win rate",
                'href' : "#"
            },
            "date" : "2 weeks ago",
            'hasBeenRead' : true
        },

        {
            "id": "7",
            "author" : {
                "name" : "Anna Kim",
                "src": Anna_Kim,
                "href" : "#"
            },
            "text" : "left the group ",
            "group" : {
                "text": "Chess Club",
                'href' : "#"
            },
            "date" : "2 weeks ago",
            'hasBeenRead' : true
        }


    ])


    const [isAllRead,setIsAllRead] =useState(false)


    const handleNotificationClick = (id)=>{
        setNotifications((prev) => prev.map(n=>(
            n.id === id
            ? {...n , hasBeenRead : true}
            : n
        )))
    }
     

  return (
    
    <div className="container">
    <div className="notification-top">
        <h3>Notification  <span className="notification-number">{notifications.filter(n=> !n.hasBeenRead).length} </span> </h3>
        <p onClick={()=>{setIsAllRead(true)}}>Mark all as read</p>
        </div>
    {notifications &&
      notifications.map((n) => (
        <>
        

        <div   onClick={()=>handleNotificationClick(n.id)}  className={`${(!n.hasBeenRead && !isAllRead)? 'notification new ': 'notification' }  `} key={n.id}>
          <img src={n.author.src} alt={n.author.name} className="avatar"/>
          
          <div className="notification-item">
            
           <p className="notification-details">
            <span className="avatar-name">{n.author.name} </span>
            {n.text} 
            {n.post && <a href={n.post.href} className="post">{n.post.text} </a> } 
             {n.group && <a  href ={n.group.href} className="group"> {n.group.text} </a> }
              
            {(!n.hasBeenRead && !isAllRead) && <i className="fa-solid fa-circle"></i> }
            

            
            </p>
            
            <p className="date">{n.date}
            
             </p>
             {n.privateMessage && <span className="msg">{n.privateMessage}</span> }
          </div>
            {n.picture && <img className="picture" src={n.picture.src} alt="" /> }
          
          
        </div>
        </>
      ))}
  </div>
  
  )
}

export default App
