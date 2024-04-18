import React from 'react'
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

const RoomCard = ({ $id, roomname, featuredimage }) => {
    return (
        <>

            {/* <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-fit justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(featuredimage)} alt={roomname}
                        className='rounded-xl w-10' />

                </div>
                <h2
                    className='text-xl font-bold'
                >{roomname}</h2>
            </div> */}

            <div className="max-w-fit mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                {/* Image */}
                <img className="w-full h-40 object-cover" src={appwriteService.getFilePreview(featuredimage)} alt={roomname} />

                {/* Title */}
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">{roomname}</h2>
                </div>

                {/* Button */}
                <div className="px-4 pb-4">
                    <Link to={`/rooms/${$id}`}>
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default RoomCard