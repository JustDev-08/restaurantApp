import React ,{useState} from 'react'
import './asset/footer.css'

export default function Footer() {
    const [tab , setTab] = useState(true)
    const handleTab = ()=>{
        setTab(!tab)
    }
    return (
        <>
            {(tab) ? <div className='footer'>
                <div className='footer-con'>
                    <span className='copyright'>
                        <h2>@Copyright burapat</h2>
                    </span>
                    <span className='us'>
                            <p>#user    </p>
                            <button onClick={handleTab}> ปิดเเทป</button>
                    </span>
                </div>
            </div> : <button className='button-on' onClick={handleTab}>เปิดเเทป</button>}
            
        </>
    )
}
