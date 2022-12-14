import { useEffect } from 'react'
import RowDetailModalBody from '../features/table/components/RowDetailModalBody'
import { MODAL_BODY_TYPES } from '../utils/globalConstantUtil'

function ModalLayout({isOpen, closeModal, modalBodyType, size}){


    useEffect(() => {
      }, [])

    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => closeModal()}>✕</button>
                {
                    {
                             [MODAL_BODY_TYPES.USER_DETAIL] : <RowDetailModalBody closeModal={closeModal}/>,
                             [MODAL_BODY_TYPES.DEFAULT] : <div></div>
                    }[modalBodyType]
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout