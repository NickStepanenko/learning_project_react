import MainNavbar from '../../main_navbar/main_navbar';
import Slider from '../../slider/slider';
import HotOffers from '../../hot_offers/hot_offers';

function MainPageLayout() {
    return (
        <section>
            <MainNavbar />
            <Slider />
            <HotOffers />
        </section>
    );
}

export default MainPageLayout;