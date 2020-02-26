import React, { Component } from 'react'
import './topPosts.scss'
import Post from './Post'
import axios from 'axios'
import compare from './compare'
import NextPrevCtrl from './NextPrevCtrl'
import CircleControls from './CircleControls'

class TopPosts extends Component {
    constructor() {
        super()
        this.state = {
            ariaHidden: true,
            transform: 'translate(-100%,0px)',
            sortedPostes: []
        }
    }

    componentDidMount() {
        axios.get('https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={%22id%22:%22173560420%22,%22first%22:%222772%22,%22after%22:%22QVFDS0hFSF9zendjaXlQdnhCLWxMenZxd1dEMy15cUNmTjJKLS1kNnhPbVBFM0U4VjZHdWstYWhENHZIaEQ0eEplVjl3RTRKSWJrTXJYb1BsS0NkYXExbA==%22}')
            .then(res => {
                const posts = res.data.data.user.edge_owner_to_timeline_media.edges
                const sortedPostes = posts.sort(compare).splice(0, 6)
                this.setState({ sortedPostes: sortedPostes })
            })
            .catch(e => console.log(e))
    }

    clickHandler = () => {
        this.state.transform === 'translate(-100%,0px)'
            ?
            this.setState((prevState) => {
                return {
                    ariaHidden: !prevState.ariaHidden,
                    transform: 'translate(0%,0px)'
                }
            })
            :
            this.setState((prevState) => {
                return {
                    ariaHidden: !prevState.ariaHidden,
                    transform: 'translate(-100%,0px)'
                }
            })
    }

    render() {
        let style = { transform: this.state.transform }
        return (

            <div className="MuiGrid-root statisticsLanding_topPost_container MuiGrid-container MuiGrid-justify-xs-center">
                <div className="MuiGrid-root statisticsLanding_topPost MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6">
                    <h2>Top Post</h2>
                    <div className="MuiBox-root jss157">

                        <NextPrevCtrl clickHandler={this.clickHandler} />

                        <div className="jss166">
                            <div className="jss167 react-swipeable-view-container" style={style} >

                                < div className="jss168" aria-hidden={this.state.ariaHidden} data-swipeable="true" >
                                    <div className="MuiBox-root jss161">
                                        {this.state.sortedPostes.map((post, index) => {
                                            if (index <= 2) {
                                                return <Post src={post.node.thumbnail_src}
                                                    likes={post.node.edge_media_preview_like.count}
                                                    comments={post.node.edge_media_to_comment.count}
                                                    key={post.node.id}
                                                />
                                            }
                                        })}
                                    </div>
                                </div >

                                < div className="jss168" aria-hidden={this.state.ariaHidden} data-swipeable="true" >
                                    <div className="MuiBox-root jss161">

                                        {this.state.sortedPostes.map((post, index) => {
                                            if (index > 2) {
                                                return <Post src={post.node.thumbnail_src}
                                                    likes={post.node.edge_media_preview_like.count}
                                                    comments={post.node.edge_media_to_comment.count}
                                                    key={post.node.id}
                                                />
                                            }
                                        })}
                                    </div>
                                </div >
                            </div>
                        </div>

                        <CircleControls clickHandler={this.clickHandler} ariaHidden={this.state.ariaHidden} />

                    </div>
                </div>
            </div>
        )
    }
}

export default TopPosts