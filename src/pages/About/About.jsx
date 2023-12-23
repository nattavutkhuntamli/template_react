import Template from "../../components/Template"
import SectionAbout from "../Home/SectionAbout";
function About() {
    document.title = "About Pages"
    document.body.classList.add('sub_page');
    return(
        <>
         <Template>
          <SectionAbout/>
         </Template>
        </>
    )
}

export default About