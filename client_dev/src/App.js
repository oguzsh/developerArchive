import React, { useState, useEffect} from "react";
import axios from "axios"

// Components
import Posts from "./components/Posts";
import Header from "./components/Header";

// Style
import "./css/global.css";

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/')
      .then((res) => {
        const posts = res.data;
        setPosts(posts);
      }).catch(err => console.log('Error ' + err));
    })


    return (
      <div className="container">
        <Header/>
        <Posts posts={posts}/>
    </div>
    )
}

export default App;