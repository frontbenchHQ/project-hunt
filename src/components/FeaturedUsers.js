import React from 'react';
import UserCard from './UserCard';
import topUsers from 'data/usersData';


const FeaturedUsers = () => {
    return (
        <div className="flex flex-col m-8">
            <h1 className="text-2xl md:text-left font-semibold mb-4">Top Makers</h1>
            <div className="bg-white p-4 md:p-8 border rounded-md">

                {
                    topUsers.map(user => {
                        return <UserCard user={user} />
                    })
                }

            </div>
        </div>
    );
}

export default FeaturedUsers;