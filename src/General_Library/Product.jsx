import './Product.scss';

function Product() {
    return (
        <div className="Product-Box">
            <div className="Product-Box1">
                <div className="Product-Box1-image"></div>
            </div>
            <div className="Product-Box2">
                <div className="Product-Box2-heading">Redmi Note 10 Pro (Sky Blue, 64GB)</div>
                <div className="Product-Box2-rating"><p className="star-box">4.2 *</p>
                    <p className="Product-Box2-review"> 20,965 Ratings & 1,223 Reviews</p></div>
                <div>
                    <p className="Product-Box2-Specifications">4 GB RAM | 64 GB ROM </p>
                    <p className="Product-Box2-Specifications">16.59 cm (6.53 inch) HD+ Display</p>
                    <p className="Product-Box2-Specifications">13MP + 2MP | 5MP Front Camera</p>
                    <p className="Product-Box2-Specifications">5000 mAh Battery</p>
                    <p className="Product-Box2-Specifications">MediaTek Helio G35 Processor</p>
                    <p className="Product-Box2-Specifications">1 year manufacturer warranty for device and 6 months</p>
                    <p className="Product-Box2-Specifications">
                        manufacturer warranty for in-box accessories including batteries
                        from the date of purchase</p>
                </div>

            </div>
            <div className="Product-Box3">
                <div className="Product-Box3-price">Rs 9,186</div>
                <div className="Product-Box3-delivery-status">Free Delivery</div>
            </div>
        </div>
    );
}

export default Product;
