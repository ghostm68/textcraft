import React from "react";

// Don't forget to
// // download the CSS file too OR 
// // remove the following line if you're already using Tailwind 
import "./style.css";

export const MyPlugin = () => {
  return (
    <div id="webcrumbs"> 
    	<div className="w-[800px] rounded-lg shadow-lg bg-neutral-50">
    	    <div className="flex flex-col">
    	        <div className="flex justify-between items-center bg-neutral-300 p-2">
    	            <div className="flex space-x-4">
    	                <div className="bg-green-500 text-white rounded-md p-1">Help</div>
    	                <div className="bg-neutral-100 text-black rounded-md p-1">Project</div>
    	                <div className="bg-neutral-100 text-black rounded-md p-1">Layout</div>
    	                <div className="bg-neutral-100 text-black rounded-md p-1">Styles</div>
    	                <div className="bg-neutral-100 text-black rounded-md p-1">Extras</div>
    	            </div>
    	            <div className="flex space-x-2">
    	                <div className="bg-neutral-100 rounded-md p-1">
    	                    <span className="material-symbols-outlined">build</span>
    	                </div>
    	                <div className="bg-neutral-100 rounded-md p-1">
    	                    <span className="material-symbols-outlined">content_cut</span>
    	                </div>
    	                <div className="bg-neutral-100 rounded-md p-1">
    	                    <span className="material-symbols-outlined">photo_camera</span>
    	                </div>
    	                <div className="bg-neutral-100 rounded-md p-1">
    	                    <span className="material-symbols-outlined">brush</span>
    	                </div>
    	                <div className="bg-neutral-100 rounded-md p-1">
    	                    <span className="material-symbols-outlined">insert_drive_file</span>
    	                </div>
    	            </div>
    	        </div>
    	
    	        <div className="flex items-center bg-orange-200 p-2">
    	            <div className="mr-4 text-black">untitled</div>
    	            <div className="flex space-x-2">
    	                <div className="bg-blue-400 w-[24px] h-[24px] rounded-md text-white">⇆</div>
    	                <div className="bg-blue-400 w-[24px] h-[24px] rounded-md text-white">≡</div>
    	                <div className="bg-blue-400 w-[24px] h-[24px] rounded-md text-white">⊞</div>
    	                <div className="bg-blue-400 w-[24px] h-[24px] rounded-md text-white">⇋</div>
    	                <div className="bg-blue-400 w-[24px] h-[24px] rounded-md text-white">⬜</div>
    	            </div>
    	            <div className="ml-auto text-black">Page 1</div>
    	        </div>
    	
    	        <div className="relative h-[400px]">
    	            <div className="absolute flex flex-col bg-white w-full h-full p-4">
    	                <div className="flex-1 border-b border-black relative">
    	                    <div className="absolute bottom-2 left-0 text-red-500">▼</div>
    	                    <div className="absolute bottom-2 left-16 text-red-500">▼</div>
    	                </div>
    	                <div className="flex flex-row justify-between items-center mt-2">
    	                    <div className="bg-neutral-300 w-[20px] h-[20px]"></div>
    	                    <div className="bg-neutral-300 w-[700px] h-[20px]"></div>
    	                    <div className="bg-neutral-300 w-[20px] h-[20px]"></div>
    	                </div>
    	            </div>
    	        </div>
    	    </div>
    	</div> 
    </div>
  )
}

