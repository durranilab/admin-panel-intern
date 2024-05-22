import React, {useState} from 'react';
import axios from "axios";
import {PlusCircleIcon} from "@heroicons/react/16/solid";

const About = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(0)

    const [loading, setLoading] = useState(false)

    const saveProduct = () => {
        setLoading(true)
        axios.post('http://127.0.0.1:8000/api/products/add', {
            'title': title,
            'description': description,
            'image': image,
            'price': price
        }).then((res) => {
            alert('Product saved')
            setLoading(false)
            clearAll()
        }).catch((err) => {
            alert('Product not saved')
            setLoading(false)
        })
    }

    const clearAll = ()=>{
        setTitle('')
        setDescription('')
        setImage('')
        setPrice(0)
    }

    return (
        <div className={'m-4 py-12'}>

            <div className={'flex flex-col max-w-sm'}>
                <label>Title</label>
                <input className={'border border-gray-300 p-2 bg-gray-100'} type="text" value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className={'flex flex-col max-w-sm'}>
                <label>Desc</label>
                <input className={'border border-gray-300 p-2 bg-gray-100'} type="text" value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className={'flex flex-col max-w-sm'}>
                <label>image</label>
                <input className={'border border-gray-300 p-2 bg-gray-100'} type="text" value={image}
                       onChange={(e) => setImage(e.target.value)}/>
            </div>

            <div className={'flex flex-col max-w-sm'}>
                <label>price</label>
                <input className={'border border-gray-300 p-2 bg-gray-100'} type="number" value={price}
                       onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <br/>

            <button className={'border border-gray-300 p-2 bg-gray-500 text-white'} type="button"
                    onClick={() => {
                        saveProduct()
                    }}
            disabled={loading}
            ><div className={'flex'}>
                Submit &nbsp;
                {loading && <PlusCircleIcon className={'w-6 h-6 animate-spin'} />}
            </div>
            </button>


        </div>
    );
};

export default About;
