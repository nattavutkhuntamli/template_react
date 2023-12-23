import Header from "./Header"
import Footer from "./Footer"
function Template(props) {
  return (
    <>
        <div className="hero_area">
            <Header/>
        </div>
             {props.children}
        <Footer/>
    </>
  )
}
export default Template