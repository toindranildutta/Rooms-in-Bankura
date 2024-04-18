import React, {useEffect, useState} from 'react'
import {Container, RoomForm} from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

const EditRoom = () => {
    const [room, setRoom] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        if(slug) {
            appwriteService.getListing(slug).then((post) => {
                
                if(post) {
                    setRoom(post);
                }
            })
        } else {
            navigate("/");
        }
    },[slug, navigate])


  return room ? (
    <div className='py-8'>
        <Container>
            <RoomForm post={room} />
        </Container>
    </div>
  ) : null
}

export default EditRoom