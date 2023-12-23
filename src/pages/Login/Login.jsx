import Template from "../../components/Template"
import { useState } from "react";
function Login() {
  document.title ="Login Pages"
  document.body.classList.add('sub_page');
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const headleSubmit =  async(e) => {
    e.preventDefault()
    try {
        const InputObject = {
            "username":username,
            "password":password
        }
        console.log(InputObject);
    } catch (error) {
        console.log(error)
    }
  }

    return(
        <>
          <Template>
            <section className="contact_section pb-5 mt-5 ">
                    <div className="container">
                    <div className="heading_container heading_center">
                        <h2>LogIn <span>Touch</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 px-0 mx-auto">
                        <div className="form_container">
                            <h1 className="text-white text-center pb-5"></h1>

                            <form onSubmit={headleSubmit}>
                            <div className="form-row">
                                <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Your Username" onChange={e => setUsername( e.target.value )} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                <input type="password" className="form-control" placeholder="Your Password"  onChange={e => setPassword( e.target.value )}/>
                                </div>
                            </div>
                            <div className="btn_box " >
                                <button style={{width:"100%"}}>
                                Login
                                </button>
                            </div>
                            </form>
                        </div>
                        </div>
                       
                    </div>
                    </div>
            </section>
          </Template>
        </>
    )
}

export default Login