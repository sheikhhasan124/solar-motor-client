import React from 'react';
import { HiFlag,HiArchive,HiUserGroup,HiThumbUp} from "react-icons/hi";

const summaries= [
    {
        id:1,
        icon: <HiFlag/>,
        num:'100+',
        name:'Countries'
    },
    {
        id:2,
        icon:<HiArchive/>,
        num:'520+',
        name:'Complete priject'
    },
    {
        id:3,
        icon:<HiUserGroup/>,
        num:'350+',
        name:'Happy Clients'
    },
    {
        id:4,
        icon:<HiThumbUp/>,
        num:'499',
        name:'Feedback'
    },
]

const Summary = () => {
    return (
        <div className='my-20 '>
            <div className='text-center'><h2 className='text-3xl  font-semibold'><span className='text-amber-500'>MILLIONS</span> BUSINESS TRUST US</h2>
            <p className='font-semibold text-gray-500'>TRY TO UNDESTAND USER EXPEXTATIONS</p></div>
            <hr className='mb-20'/>
            <div className='grid grid-cols-4 my'>
                {summaries.map(summary=><div className='text-center'>                   
                    <div className='text-3xl  text-amber-500 flex justify-center mb-3 '>
                       {summary.icon} 
                    </div>
                   <div> <h2 className='ml-4 font-semibold text-2xl'>{summary.num}</h2> <p className='text-amber-600 font-semibold text-sm'>{summary.name}</p>
                   </div>
                </div>)}
            </div>
            <div style={{}} className='grid md:grid-cols-2 my-12 w-[80%] ml-12   lg:ml-32 shadow-sm'>
                <div className='w-50'>
                    <h3 className='text-amber-600 font-bold text-2xl'>Have any question about us or get a product request?</h3>
                    <p className='text-sm text-gray-500'>Don't hasitate to contack us</p>
                </div>
                <div className='my-4 w-50 md:ml-12'>
                    <button className='btn bg-primary btn-outline mr-5 border-0'>Request Order</button>
                    <button className='btn '>Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Summary;