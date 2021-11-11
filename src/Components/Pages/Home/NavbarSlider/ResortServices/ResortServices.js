import React from 'react';
import pool from '../../../../../images/resort-services/pool.jpg';
import food from '../../../../../images/resort-services/food.jpg';
import cocktail from '../../../../../images/resort-services/cocktail.jpg';
import volley from '../../../../../images/resort-services/beach_volley.jpg';


const ResortServices = () => {
    return (
        <div className="grid justify-items-center">
            <div className=" md:w-8/12 grid justify-items-center">
                <h1 className="md:text-8xl text-5xl my-5"><span className="underline">Resort</span> Services</h1>
                <div className="my-6 grid grid-cols-1 md:grid-cols-2 justify-items-left">
                    <div  className="flex mb-2">
                        <div className="p-2 w-1/2">
                            <img src={volley} alt="" />
                        </div>

                        <div  className="text-left w-1/2">
                            <h2 className="text-3xl"><span className="font-bold underline">Beach</span> Sports</h2>
                            <p>We facilitates you with differents types of sports</p>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="p-2 w-1/2">
                            <img src={food} alt="" />
                        </div>

                        <div  className="text-left w-1/2">
                            <h2 className="text-3xl"><span className="font-bold underline">Nice</span> Foods</h2>
                            <p>We have foods from different countries</p>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="p-2 w-1/2">
                            <img src={cocktail} alt="" />
                        </div>

                        <div className="text-left  w-1/2">
                            <h2 className="text-3xl text-left"><span className="font-bold underline">Exotic</span> Drinks</h2>
                            <p>We know, you must love our drinks from different countries</p>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <div className="p-2 w-1/2">
                            <img src={pool} alt="" />
                        </div>

                        <div className="text-left w-1/2">
                            <h2 className="text-3xl"><span className="font-bold underline">Fancy</span> Pool</h2>
                            <p>Beautiful pool you must love</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ResortServices;