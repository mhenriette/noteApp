import React from "react";

function SideBar({Addnote, Notes, DeleteNote}) {
  return <div className="w-[30%] h-screen border border-[#ddd]">
    <div className="flex justify-between p-[25px]">
        <h1>Notes</h1>
        <button onClick={Addnote}>Add</button>

    </div>
    <div className="">
        {Notes.map(el=>
        <div key={el.id} className='p-5 bg-gray-200 m-2'>
           <div className="font-bold text-lg flex justify-between items-center"><span>{el.title}</span> <button className="text-red-500" onClick={()=>DeleteNote(el.id)}>delete</button></div> 
           <div className="font-normal text-base">{el.body}</div>
           <div className="text-sm text-gray-400">last updated {new Date(el.lastModified).toLocaleDateString('en-GB', {})}</div>
        </div>
        
        )
        }
    </div>

  </div>;
}

export default SideBar;
