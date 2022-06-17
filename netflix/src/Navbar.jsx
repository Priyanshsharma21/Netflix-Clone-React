import React from 'react'
import { useEffect, useState} from 'react'
import './Navbar.css'
import NetflixLogo from './netflix.png'
import NetflixAccont from './netflix_acount.png'

const Navbar = () => {



    const [show, handelShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handelShow(true)
            }else{
                handelShow(false)
            }
        });
        return ()=>{
            window.removeEventListener("scroll",()=>{
                console.log("Listner removed")
            });
        };

    },[])

  return (
    <>
    <div className={`nav ${show && "nav_black"}`}>
        <img src={NetflixLogo} alt="netflix logo" className='nav_logo' />
        <ul className="navigation">
            <li className="li_item"><a href="/">Home</a></li>
            <li className="li_item"><a href="/tvshow">TV Shows</a></li>
            <li className="li_item"><a href="/movies">Movies</a></li>
            <li className="li_item"><a href="/new&popular">New & Popular</a></li>
            <li className="li_item"><a href="/mylist">My List</a></li>
         </ul>
        <img src={NetflixAccont} alt="my account" className='nav_avatar' />
    </div>
    

    </>
  )
}

export default Navbar