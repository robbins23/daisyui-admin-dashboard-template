function RowDetailModalBody({closeModal}){
    return(
        <>
            <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={() => closeModal()}>Yay!</label>
            </div>
        </>
    )
}

export default RowDetailModalBody