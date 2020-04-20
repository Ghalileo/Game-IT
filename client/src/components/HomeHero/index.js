import React, { useState, useEffect } from "react"
import { List, ListItem } from "../Items";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css"

function HomeHero({children}) {
    
    const [thread, setThread] = useState({})

  useEffect(() => {
    loadThreads()
    
  }, [])

  function loadThreads() {
    API.getThreads()
      .then(res => 
        setThread(res.data)
      )
      .catch(err => console.log(err));
  };

    return (
        <div className="wrap">
            {children}
            <div className="inwrap">
            {thread.length ? (
              <List>
                {thread.map(threads => (
                  <ListItem key={threads._id}>
                    <Link to={"/forum/" + threads._id}>
                      <strong>
                        {threads.topicName}  
                        
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
        </div>
    )
}

export default HomeHero;