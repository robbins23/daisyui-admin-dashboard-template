import {useDispatch, useSelector} from 'react-redux'
import {getTableContent} from './tableSlice'
import {useState, useEffect} from 'react'
import { openModal } from '../common/modalSlice'
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'

function Table(){
    const dispatch = useDispatch()
    const tableData = useSelector(state => state.table)


  useEffect(() => {
    dispatch(getTableContent())
  }, [])

  const openDetailModal = () => {
    dispatch(openModal({title : "User Detail", bodyType : MODAL_BODY_TYPES.USER_DETAIL}))
}

  return(
        <>  
            <div className="overflow-x-auto w-full">
                <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead className='sticky'>
                    <tr>
                        <th></th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                        <th>Name</th> 
                        <th>Trips</th> 
                    </tr>
                    </thead> 
                    <tbody className=''>
                        {
                            tableData.tableRows.map((t, k) => {
                                return(
                                    <tr key={k} onClick={() => openDetailModal()}>
                                        <th>{k+1}</th> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td>
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                        <td>{t.name}</td> 
                                        <td>{t.trips}</td> 
                                    </tr>
                                )
                            })
                        }
                    </tbody> 
              </table>
            </div>
        </div>
        </>
  )
}

export default Table