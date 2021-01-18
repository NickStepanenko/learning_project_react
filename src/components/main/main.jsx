import './main.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPageLayout from './layouts/main_page';

function App() {
    return (
        <div className="main-container">
            <header className="main-header">
                <Header />
            </header>
            <MainPageLayout />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;