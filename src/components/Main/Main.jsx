import { About, Company, Contact, Service, Shop, Testimonial} from './Sections'
export function Main (){

    return(
        <>
            <main>
                <About />
                <Service />
                <Shop />
                <Testimonial />
                <Company />
                <Contact />
            </main>
        </>
    )

}