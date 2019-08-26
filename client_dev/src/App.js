import React, { useState, useEffect} from "react";
import axios from "axios"

// Components
import Posts from "./components/Posts";
import Header from "./components/Header";

// Style
import "./css/global.css";

const App = () => {
    const [posts, setPosts] = useState([]);
    const [tag, setTag] = useState();

    useEffect(() => {
      getData();
    }, [])

    const getData = _ => {
      axios.get('http://localhost:5000/')
      .then((res) => {
        const posts = res.data;
        setPosts(posts);
      }).catch(err => console.log('Error ' + err));
    }

    const filteredPosts = posts.filter(posts => posts.post_label === tag);

    return (
      <div className="container">
        <Header/>
        <div className="categories">
          <ul>
            <li onClick={() => setTag()}>All</li>
            <li onClick={() => setTag("web")}>Web</li>
            <li onClick={() => setTag("mobile")}>Mobile</li>
            <li onClick={() => setTag("devops")}>DevOps</li>
          </ul>
        </div>
        <Posts posts={(filteredPosts == "") ? posts : filteredPosts}/>
    </div>
    )
}

export default App;