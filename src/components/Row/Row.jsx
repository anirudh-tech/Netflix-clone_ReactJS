import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <MdChevronLeft className=' left-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden ' size={40}/>
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, index) => (
                        item.backdrop_path && (<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 group'>
                            <Movie key={index} item={item}/>
                        </div>)
                        )
                    )}
                </div>
                <MdChevronRight className='right-0 bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </>
    )
}

export default Row