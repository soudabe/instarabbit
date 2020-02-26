import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import BackImg from './BackImg'

const initialValue = {
    imgSrc0: '',
    imgSrc1: '',
    imgSrc2: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                imgSrc0: action.data.graphql.user.edge_owner_to_timeline_media.edges[0].node.thumbnail_src,
                imgSrc1: action.data.graphql.user.edge_owner_to_timeline_media.edges[1].node.thumbnail_src,
                imgSrc2: action.data.graphql.user.edge_owner_to_timeline_media.edges[2].node.thumbnail_src
            }
        case 'error':
            return action.data
        default:
            return state
    }
}

const BackImages = () => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    useEffect(() => {
        axios.get('https://www.instagram.com/cristiano/?__a=1')
            .then(res => dispatch({ type: 'success', data: res.data }))
            .catch(error => dispatch({ type: 'error', data: console.log(error) }))
    }, [])

    let images = []
    for (let img in state) {
        images.push(<BackImg key={img} src={state[img]} />)
    }

    return (
        <div className="statisticsLanding_userInfo_header_images_container MuiGrid-item MuiGrid-grid-xs-12">
            {images}
        </div>
    )
}

export default BackImages