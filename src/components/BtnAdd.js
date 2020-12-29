import React from 'react';
import {Link} from 'react-router-dom';

const BtnAdd = ({theme}) => {
    return(
        <div className="absolute bottom-5 z-50 w-full text-center">
            <Link to="/add">
              <button className={`p-2 bg-${theme}-500 shadow-xl rounded-full`}>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                
              </button>
              </Link>
            </div>
    );
}
export default BtnAdd