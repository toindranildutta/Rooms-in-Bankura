import React, { useState, useEffect } from 'react'
import { Container, RoomCard } from '../components'
import appwriteService from '../appwrite/config'

const AllRooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        appwriteService.getListings([]).then((data) => {
            if (data) {
                setRooms(data.documents);
            }
        });
     }, [])
    
    console.log(rooms)  
    return (
        <div className='w-full py-8'>
            <Container>
                <div className="flex flex-wrap">
                    {rooms.map((room) => (
                        <div key={room.$id} className='p-2 w-1/4'>
                            <RoomCard {...room} />
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    )
}

export default AllRooms