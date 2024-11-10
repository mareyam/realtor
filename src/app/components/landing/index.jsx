import ChooseUs from './ChooseUs'
import Hero from './Hero'
import LatestUpdates from './LatestUpdates'
import MostViewedSection from './MostViewed'
import ContactUsSection from './Section'
import Solution from './Solution'
import TestimonialsSection from './Testimonials'
const Landing = () => {
    return (
        <div>
            <Hero />
            <MostViewedSection />
            <LatestUpdates />
            <Solution />
            <ChooseUs />
            <TestimonialsSection />
            <ContactUsSection />
        </div>
    )
}
export default Landing