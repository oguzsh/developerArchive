import React from 'react'

import './postcard.component.css'

const PostCard = ({id, title, desc, url}) => {
    return (
        <li className="box" key={id}>
            <h1 className="title">{title}</h1>
            <p className="body">{desc}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" />
        </li>
    )
}

export default PostCard
