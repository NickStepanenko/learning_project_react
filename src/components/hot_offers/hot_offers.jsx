import './hot_offers.scss';

import hotOfferPic1 from '../../img/iPhone6s_discover_desktop_08_iOS9.png';
import hotOfferPic2 from '../../img/Oculus-Rift-profile_grande.png';
import hotOfferPic3 from '../../img/50051823_540375.png';

let offersPics = [];
offersPics.push(hotOfferPic1);
offersPics.push(hotOfferPic2);
offersPics.push(hotOfferPic3);

function HotOffers() {
    return (
        <section class="hot-offers">
            <div class="container">
                <div class="hot-offer-row flex-container">
                    <div class="some-hot-offer" id="hot-offer-1">
                        <div class="hot-offer-text">
                            <div class="hot-offer-header">iPhone 6</div>
                            <div class="hot-offer-desc">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                            <div class="hot-offer-price">399</div>
                        </div>
                        <img class="hot-offer-img" src={ offersPics[0] } />
                    </div>
                    <div class="some-hot-offer" id="hot-offer-2">
                        <div class="hot-offer-text">
                            <div class="hot-offer-header">Oculus Rift</div>
                            <div class="hot-offer-price">349</div>
                        </div>
                        <img class="hot-offer-img" src={ offersPics[1] } />
                    </div>
                    <div class="some-hot-offer" id="hot-offer-3">
                        <div class="hot-offer-text">
                            <div class="hot-offer-header">GoPro Hero 6</div>
                            <div class="hot-offer-desc">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</div>
                            <div class="hot-offer-price">299</div>
                        </div>
                        <img class="hot-offer-img" src={ offersPics[2] } />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HotOffers;