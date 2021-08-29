import axios from 'axios'
import React from 'react'
import { URLPutClear } from '../../constants/PUTClear/URLPutClear'

export default function ResetButton() {

    const onClickClear = () =>{
      axios.put(URLPutClear).then((res)=>{
        console.log(res.data.message)
      }).catch((e) =>{
        console.log(e)
      })
    }


    return (
        <div>
          <button onClick={onClickClear}>Reset Matches</button> 
        </div>
    )
}
