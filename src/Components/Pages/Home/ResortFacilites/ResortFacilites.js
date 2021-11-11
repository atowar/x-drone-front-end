import React from 'react';
import room from '../../../../images/banner/room.jpg';
import restaurant from '../../../../images/banner/restaurant.jpg';
import './ResortFacilites.css';


const ResortFacilites = () => {
    return (
    
          <div className="grid justify-items-center">
               <div className=" md:w-8/12 grid justify-items-center">
            <h1 className="md:text-6xl text-5xl my-5"><span className="underline font-bold">Resort</span> Facilities</h1>
            <div className="my-6 grid grid-cols-1 justify-items-left">
                <div className="md:flex mb-2 p-2">
                      <div className="text-left md:w-1/2">
                        <h2 className="text-3xl">Rooms<span className="font-bold underline">/Suits</span> </h2>
                        <p className="mt-5">The rooms and suites at BeachFront Resort remarkably fulfills style, comfort and surrounding.</p>
                        <button className="btn-learn-more mt-5">LEARN MORE</button>
                    </div>
                    <div className="p-2 md:w-1/2">
                        <img src={room} alt="" />
                    </div>
                </div>
                <div className="md:flex mb-2 p-2">
                   

                    <div className="text-left md:w-1/2">
                        <h2 className="text-3xl text-left">BeachFront<span className="font-bold underline"> Dinning</span></h2>
                        <p className="mt-5">Whether you are planning A lavish wedding or intimate Dinner, Corporate or small Meeting, BeachFront Resort Can offer you an unforgettable Experience.</p>
                        <button className="btn-learn-more mt-5">LEARN MORE</button>
                    </div>
                    <div className="p-2 md:w-1/2">
                        <img src={restaurant} alt="" />
                    </div>
                </div>
        
               

            </div>
        </div>
          </div>
     
    );
};

export default ResortFacilites;