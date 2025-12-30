//@ts-nocheck

import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
const ItinerayBox = ({dayNumber}) => {
    return (
        <div className="shadow-xl rounded-lg px-4 py-4 flex flex-col gap-4">
            <div className="flex justify-between">
                <div className=" text-[20px] font-bold text-sky-500">
                    Day {dayNumber}
                </div>
                <div>
                    <RiDeleteBin6Line size={24} color="red"/>    
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div>
                        Destination
                    </div>
                    <div>
                        <input type="text" placeholder="ktm" className="w-full border-1 rounded-lg px-2 py-1 text-sm border-gray-200" />
                    </div>
                </div>
                 <div className="flex flex-col gap-1">
                    <div>
                        Activities & Plans
                    </div>
                    <div>
                        <input type="text" placeholder="choose plans" className="w-full border-1 rounded-lg px-2 py-1 text-sm border-gray-200" />
                    </div>
                </div>

            </div>
            <div className="flex justify-end text-sky-500">
                <CiCirclePlus size={40}/>
            </div>
        </div>
    )
}
export default ItinerayBox