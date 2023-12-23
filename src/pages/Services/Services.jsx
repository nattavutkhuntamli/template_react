import Template from "../../components/Template"
import SectionService from "../Home/SectionService";
function Services() {
    document.title = "Services Pages"
    document.body.classList.add('sub_page');

    return(
        <>
          <Template>
            <SectionService/>
          </Template>
        </>
    )
}

export default Services