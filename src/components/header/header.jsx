import './header.scss';

function Header() {
    return (
        <div class="container flex-container">
            <div class="language-currency-choice">
                <select name="language" id="">
                    <option value="english">EN</option>
                    <option value="russian">RU</option>
                </select>
                <select name="currency" id="">
                    <option value="dollars">USD</option>
                    <option value="euro">EU</option>
                    <option value="rubles">RUB</option>
                </select>
            </div>
            <div class="main-links">
                <div class="my-profile-link"><i class="fa fa-user fa-lg"></i>My profile</div>
                <div class="basket-link"><i class="fa fa-shopping-basket fa-lg"></i><div class="items-count">0</div>Items<div class="overall-price">0.00</div></div>
                <div class="searchbar"><i class="fa fa-search fa-lg"></i></div>
            </div>
        </div>
    );
}

export default Header;