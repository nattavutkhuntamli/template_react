import Template from "../../components/Template";
import SectionAbout from "./SectionAbout";
import SectionService from "./SectionService";
import SectionContact from "./SectionContact";
import SectionClient from "./SectionClient";
function Home() {
    document.title = "Home Pages"
    document.body.classList.remove('sub_page');
    return(
        <>
            <Template>
                {/*   <!-- about section -->  */}
                 <SectionAbout/>
                {/* end about section */}

                

                {/* service section */}
                 <SectionService/>
                {/* end */}

                {/* contact */}
                 <SectionContact/>
                {/* end */}

                {/* client */}
                <SectionClient/>
                {/* end */}

            </Template>
        </>
    )
}

export default Home