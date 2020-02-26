import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserInfo from './UserInfo'

const AllUserInfo = () => {
    const [postsCount, postsCountSet] = useState(2770)
    const [FollowersCount, FollowersCountSet] = useState(204942521)
    const [FollowingCount, FollowingCountSet] = useState(440)

    useEffect(() => {
        axios.get('https://www.instagram.com/cristiano/?__a=1')
            .then((res) => {
                postsCountSet(res.data.graphql.user.edge_owner_to_timeline_media.count)
                FollowersCountSet(res.data.graphql.user.edge_followed_by.count)
                FollowingCountSet(res.data.graphql.user.edge_follow.count)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="MuiGrid-root statisticsLanding_ER_userInfo MuiGrid-container MuiGrid-justify-xs-center">
            <UserInfo title="Followers" count={FollowersCount} />
            <UserInfo title="Following" count={FollowingCount} />
            <UserInfo title="Posts" count={postsCount} />
        </div>
    )
}

export default AllUserInfo