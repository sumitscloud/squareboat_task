import React from 'react';

function NoJobs(props) {
    return (
        <div className='no_job'>
            <img src='./writing.svg' style={{"height" : "100px"}} alt='writing' />
            Your posted jobs will show here!
            <button className='button_secondary'>Post a Job</button>
            
        </div>
    );
}

export default NoJobs;