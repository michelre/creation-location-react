import React from 'react';
import './Tags.css'

const Tags = ({tags}) => {
    return <ul className="tags">
        {tags.map(t => <li className={'tag'}>{t}</li>)}
    </ul>
}
//key unique pour la liste ? avec index ou id
export default Tags;