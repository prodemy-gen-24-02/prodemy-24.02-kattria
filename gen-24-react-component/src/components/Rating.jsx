import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (rating) => {
    return (
        <div className="flex items-center">
            {Array.from({length: 5 }, (_, index)=> (
             <FontAwesomeIcon key={index} icon={faStar} className={index < rating ? 'text-yellow-400 outline-[2px]' : 'text-gray-600 outline-[20px]'}
             />
            ))}
        </div>
    );
        
}

export default Rating;