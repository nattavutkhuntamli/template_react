import Template from "../../components/Template"
import SectionContact from "../Home/SectionContact";
function Contact() {
  document.title ="Contact"
  document.body.classList.add('sub_page');
    return(
        <>
          <Template>
            <br />
            <SectionContact/>
            <div className="pb-5"></div>
          </Template>
        </>
    )
}

export default Contact