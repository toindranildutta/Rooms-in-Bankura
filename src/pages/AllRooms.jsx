import React, { useState, useEffect, useCallback } from 'react';
import { Container, RoomCard } from '../components';
import appwriteService from '../appwrite/config';

const AllRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [search, setSearch] = useState('');

    const fetchInitialListings = useCallback(() => {
        appwriteService.getListings([]).then((data) => {
            if (data) {
                console.log('All listings:', data.documents); // Debug log
                setRooms(data.documents);
            }
        }).catch((error) => {
            console.error('Error fetching listings:', error);
        });
    }, []);

    const handleSearch = () => {
        if (search.trim()) {
            appwriteService.searchListings(search.trim()).then((data) => {
                if (data) {
                    console.log('Search results:', data.documents); // Debug log
                    setRooms(data.documents);
                }
            }).catch((error) => {
                console.error('Error fetching search listings:', error);
            });
        } else {
            fetchInitialListings();
        }
    };

    const handleAllListings = () => {
        setSearch(''); // Clear the search input
        fetchInitialListings();
    };

    useEffect(() => {
        fetchInitialListings();
    }, [fetchInitialListings]);

    return (
        <>
            {/* Search */}
            <label
                className="mx-auto mt-4 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border border-blue-200 py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
                htmlFor="search-bar">
                <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                    id="search-bar" 
                    placeholder="search location"
                    className="px-6 py-1 w-full rounded-md flex-1 outline-none bg-white" 
                />
                <button 
                    onClick={handleSearch}
                    className="w-full md:w-auto px-6 py-2 bg-blue-500 border-blue-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div className="relative">
                        <div className="flex items-center transition-all opacity-1 valid:">
                            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                Search
                            </span>
                        </div>
                    </div>
                </button>
                <button 
                    onClick={handleAllListings}
                    className="w-full md:w-auto px-6 py-2 bg-gray-500 border-gray-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div className="relative">
                        <div className="flex items-center transition-all opacity-1 valid:">
                            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                All Listings
                            </span>
                        </div>
                    </div>
                </button>
            </label>

            {/* Rooms Listing */}
            <div className='w-full py-2'>
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
        </>
    );
}

export default AllRooms;
