import Btn from './form-btn'
import { FaBeer } from "react-icons/fa";
const app = require('express')

const submitdata = () => {

}
const Mainwrapper = () => {
    return (
        <section>
            <main className="main-wrapper">
                <div className="container">
                    <div className="top-firsst">
                        <div className="main-heading">
                            <h1>CONTACT US</h1>
                            <p> LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div className="form">
                            <div className='form-btn'>
                                <Btn text= " VIA SUPPORT CHAT" />
                                <Btn text="VIA CALL" />


                            </div>
                            <div className='full-btn'>
                                <Btn text="VIA EMAIL FORM" />
                            </div>
                            <form>
                                <label className="Name">Name</label>
                                <input type="text" for="Name" />
                                <label className="Email">Email</label>
                                <input type="Email" for="Name" />
                                <label className="text">Text</label>
                                <textarea></textarea>
                                <input type='submit' onClick={submitdata} />
                            </form>
                        </div>
                        <div className="svg">
                            <img src="/images\Service 24_7-pana 1.svg" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </section>

    )
}
export default Mainwrapper;