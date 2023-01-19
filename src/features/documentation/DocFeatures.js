import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { setPageTitle, showNotification } from "../common/headerSlice"
import GettingStartedNav from "./components/GettingStartedNav"
import ReadMe from "./components/GettingStartedContent"
import GettingStartedContent from "./components/GettingStartedContent"
import FeaturesNav from "./components/FeaturesNav"
import FeaturesContent from "./components/FeaturesContent"



function Features(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Documentation"}))
      }, [])


    return(
        <>
            <div className="bg-base-100  flex overflow-hidden  rounded-lg" style={{height : "82vh"}}>
                    <div className="flex-none p-4">
                        <FeaturesNav activeIndex={1}/>
                    </div>

                    <div className="grow pt-16  overflow-y-scroll">
                        <FeaturesContent />
                    </div>

                </div>
           
        </>
    )
}

export default Features