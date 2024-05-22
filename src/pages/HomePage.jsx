import React, {useEffect, useState} from 'react';
import HeroSection from "../comps/HeroSection";
import SectionHeader from "../comps/SectionHeader";
import ProductsComponent from "../comps/ProductsComponent";
import axios from "axios";

const HomePage = () => {

    // const products = [
    //     {
    //         title: 'Product 1',
    //         description: 'Product 1 description',
    //         price: 10,
    //         image: 'https://m.media-amazon.com/images/I/71xvE3A8+kL.jpg'
    //     },
    //     {
    //         title: 'Product 2',
    //         description: 'Product 2 description',
    //         price: 20,
    //         image: 'https://www.truesolutiononline.com/wp-content/uploads/2022/09/JBL-GO-2-PORTABLE-SPEAKERS.webp'
    //     },
    //     {
    //         title: 'Product 3',
    //         description: 'Product 3 description',
    //         price: 30,
    //         image: 'https://images.jdmagicbox.com/quickquotes/images_main/jbl-speakers-25-06-2020-780-184516611-50hog.png'
    //     },
    //     {
    //         title: 'Product 4',
    //         description: 'Product 4 description',
    //         price: 40,
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-6oFKj7ktTU1iF-zYrcF6sJdQLuCIKt5LaT4HtLjIQ&s'
    //     }
    // ]

    const [products, setProducts] = useState([]);


    const getProducts = async () => {
        axios.post('http://127.0.0.1:8000/api/products').then((response) => {
            setProducts(response.data)
        })
    }

    useEffect(() => {
        getProducts().then()
    }, [])


    return (
        <div>

            <HeroSection/>
            <SectionHeader title={"Featured Products"}/>

            <ProductsComponent products={products}/>

        </div>
    );
};

export default HomePage;
