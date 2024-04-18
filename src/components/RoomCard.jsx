import React from 'react'
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

const RoomCard = ({ $id, roomname, featuredimage, username }) => {
    return (
        <Link to={`/rooms/${$id}`}>
            

            {/* New card */}

            <div className="w-72 h-80 bg-white shadow-lg p-3 flex flex-col  rounded-2xl">
                
                    <img
                        src={appwriteService.getFilePreview(featuredimage)}
                        alt={roomname}
                        className="h-48 bg-gray-700 rounded-xl"
                    />
            
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col pt-4">
                            <span className="text-base font-bold">{roomname}</span>
                            <p className="text-xs text-gray">Added By {username}
                            </p>
                        </div>
                    </div>
                    <button className=" hover:bg-blue-500 text-white bg-blue-600 py-2 rounded-md">Show Details</button>
                </div>
            </div>
        </Link>
    )
}

export default RoomCard