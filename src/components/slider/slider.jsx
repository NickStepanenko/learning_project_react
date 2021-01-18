import './slider.scss';
import iPhoneX from '../../img/iphonex_spacegray.png';

function Slider() {
    return (
        <section class="slider">
            <div class="container">
                <div class="slider-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.89" height="23.805" viewBox="0 0 13.89 23.805" class="slider-prev">
                        <path id="arrow_left" data-name="arrow left" d="M341.3,491.754l11.9,10.856a1,1,0,0,0,1.414-1.409L343.428,491l11.181-10.2a1,1,0,1,0-1.414-1.409l-11.9,10.857a1.147,1.147,0,0,0,0,1.509Z" transform="translate(-341.012 -479.097)" fill="#22262a"/>
                    </svg>
                    <div class="slider-item">
                        <div class="slider-item-text">
                            <div class="slider-item-header">iPhone X</div>
                            <div class="slider-item-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</div>
                            <div class="slider-item-more"></div>
                        </div>
                        <div class="slider-item-img">
                            <img src={iPhoneX}/>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.016" height="23.993" viewBox="0 0 14.016 23.993" class="slider-next">
                        <path id="arrow_right" data-name="arrow right" d="M1578.717,491.744l-12.007,10.942a1.012,1.012,0,0,1-1.427,0,1,1,0,0,1,0-1.42l11.283-10.283L1565.283,480.7a1,1,0,0,1,0-1.42,1.012,1.012,0,0,1,1.427,0l12.007,10.942a1.155,1.155,0,0,1,0,1.521Z" transform="translate(-1564.988 -478.987)" fill="#22262a"/>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default Slider;