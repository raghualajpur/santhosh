import React, { useEffect,useState } from 'react'
import './index.css'
import userEvent from '@testing-library/user-event'

const CodeingPlatforms = () =>{
    const [leetcodeDetails,setLeetcodeDetails]=useState({})
    const [codeChefDetails,setCodeChefDetails]=useState({})
    const [codeForcesDetails,setCodeForcesDetails]=useState({})
    useEffect(()=>{
        const leetcode = async () => {
            try{
                const response=await fetch(`https://leetcode-api-faisalshohag.vercel.app/Santhosh_2110030392`)
                const information=await response.json()
                setLeetcodeDetails(information)
                console.log(information)
            }catch(error){
                console.log(error)
            }
    
        }
        const codeChef = async () => {
            /*try{
                const url='https://codechef-api.vercel.app/klu_030392'
                const response=await fetch(url)
                const information=await response.json()
                setCodeChefDetails(information)
                console.log(information)
            }
            catch(error){
                console.log(error)
            }*/
            fetch('https://codechef-api.vercel.app/klu_030392')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            
        }
        const codeForces = async () => {
            try{
                const username="2110030392_santhosh"
                const url=`https://codeforces.com/api/user.info?handles=${username}&checkHistoricHandles=false`
                const response=await fetch(url)
                const information=await response.json()
                console.log(information)
                setCodeForcesDetails(information)
            }catch(error){
                console.log(error)
            }
    
        }

        leetcode()
        codeChef()
        codeForces()
    },[])

    return (
        <div className="container">
                <input type="radio" name="slider" id="item-1" checked/>
                <input type="radio" name="slider" id="item-2"/>
                <input type="radio" name="slider" id="item-3"/>
            <div className="cards">
                <label className="card" for="item-1" id="song-1">
                <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song"/>
                </label>
                <label className="card" for="item-2" id="song-2">
                <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song"/>
                </label>
                <label className="card" for="item-3" id="song-3">
                <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song"/>
                </label>
            </div>
            <div className="player">
                <div className="upper-part">
                <div className="play-icon">
                    <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
                    <defs/>
                    <path d="M5 3l14 9-14 9V3z"/>
                    </svg>
                </div>
                <div className="info-area" id="test">
                    <label className="song-info" id="song-info-1">
                    <div className="title">Bunker</div>
                    <div className="sub-line">
                        <div className="subtitle">Balthazar</div>
                        <div className="time">4.05</div>
                    </div>
                    </label>
                    <label className="song-info" id="song-info-2">
                    <div className="title">Words Remain</div>
                    <div className="sub-line">
                        <div className="subtitle">Moderator</div>
                        <div className="time">4.05</div>
                    </div>
                    </label>
                    <label className="song-info" id="song-info-3">
                    <div className="title">Falling Out</div>
                    <div className="sub-line">
                        <div className="subtitle">Otzeki</div>
                        <div className="time">4.05</div>
                    </div>
                    </label>
                </div>
                </div>
                <div className="progress-bar">
                <span className="progress"></span>
                </div>
            </div>
            </div>
    )
    

    
}

export default CodeingPlatforms