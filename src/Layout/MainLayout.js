import './MainLayout.scss';
import Product from "../General_Library/Product";

function MainLayout() {
    return (<div className="mainLayout">
            <div className="header1">
                <div className="productOutline">
                    <div className="FlipkartName">Flipkart</div>
                    <div className="searchBox"></div>
                    <div className="emptyspace"></div>
                    <div className="headerLogin">Sumit</div>
                    <div className="headerLogin">More</div>
                    <div className="headerLogin">Cart</div>
                </div>
            </div>
            <div className="header2">
                <div className="productOutline">
                <div className="productType">Electronics</div>
                <div className="productType">TV & Appliances</div>
                <div className="productType">Men</div>
                <div className="productType">Women</div>
                <div className="productType">Baby & Kids</div>
                <div className="productType">Home & Furniture</div>
                    <div className="productType">Sports, Books & More</div>
                    <div className="productType">Flights</div>
                    <div className="productType">Offer Zone</div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-left"></div>
                <div className="bottom-right">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
