'use client'
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Star } from '@mui/icons-material';
import Navbar from '../Components/Navbar/page';
import Drawer from '../Components/Drawer/page';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import toast from 'react-hot-toast';
import Footer from '../Footer/page';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function SinglePage({ searchParams }) {
    const { id, name, picture, tag, price } = searchParams;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBuyNow = useCallback((searchParams) => {
        console.log("Adding to cart => ", searchParams);
        // setSelectedItems((prevItems) => [...prevItems, searchParams]);
        setSelectedItems((prevItems) => {
            const newItems = [...prevItems, searchParams];
            console.log("Items to be Added 1 => ", newItems);
            return newItems;
        });

        setIsDrawerOpen(true);
    }, [])

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedItems.length > 0) {
                    console.log("Items to be Added => ", selectedItems);
                    const API = await axios.post('/api/Users/Cart', selectedItems);

                    const res = API.data;
                    console.log("Data From singlProductPage : ", res);
                    toast.success("Item Successfully added to cart")
                }
            } catch (error) {
                console.error("err at useEffect : ", error);
            }
        }
        fetchData();
    }, [selectedItems])

    useEffect(() => {
        console.log("Selected Items in Drawer:", selectedItems);
    }, [selectedItems]);



    return (
        <div>
            <Navbar />
            <div
                key={id}
                className='flex items-center justify-center gap-16 -ml-24 mt-6 '>
                <Image
                    className='-mt-20'
                    src={picture}
                    alt='shoes'
                    width={650}
                    height={700}
                // style={{height:'auto', width:'auto'}}
                />
                <div className=' flex flex-col  px-6 mt-12 '>
                    <h2 className='text-4xl font-bold mb-4'>{name}</h2>
                    <h3 className='text-2xl font-semibold font-serif text-gray-700'>{tag}</h3>
                    <p
                        className='text-xl font-bold flex flex-row'
                    >5
                        <Star
                            style={{ marginTop: '4px', paddingLeft: '3px' }}
                            fontSize='small' /></p>

                    <h3
                        className='text-4xl mt-10'
                    >{price}</h3>

                    <div className='mt-5'>
                        <p className='font-semibold font-serif text-2xl'>Select Size (Size guide)</p>

                        <div className="mt-2 flex w-full flex-wrap gap-5">
                            <button className="w-20 rounded-md border-2 border-zinc-600 p-1 text-lg transition-all 2xl:w-28 2xl:py-2false border-black/5 hover:bg-black text-zinc-600 hover:text-white " disabled="">40</button>
                            <button className="w-20 rounded-md border-2 border-zinc-600 p-1 text-lg transition-all 2xl:w-28 2xl:py-2 text-zinc-600 hover:border-black hover:bg-black hover:text-white false"
                            > 41</button>
                            <button className="  w-20 rounded-md border-2 border-zinc-600 p-1 text-lg transition-all 2xl:w-28 2xl:py-2  text-zinc-600 hover:border-black hover:bg-black hover:text-white  false">42</button>
                        </div>
                        <p className='mt-5 w-96 text-left text-lg '>
                            We could use a lot of superlatives to describe the Nike Air Max 2021. We could tell you that we’ve incorporated recycled materials to design a sneaker with at least 20% recycled content. Or the new Air cushioning unit underfoot is our most revolutionary. Perhaps we’d call it the the pinnacle of comfort, waxing poetic about the cored-out foam midsole that gives you the lightest, softest feel. But maybe we just say its modern meets technical with a splash of heritage DNA. What fun is giving away the surprises?
                        </p>
                        <div className='flex flex-col'>
                            <Button
                                variant='text'
                                color='error'
                                size='small'
                                onClick={handleOpen}>View product details</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h3" component="h2" sx={{ fontWeight: 'medium' }}>
                                        Product Details
                                    </Typography>
                                    <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
                                        Created with Passion
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: 'revert', fontWeight: 'medium', textAlign: 'center' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo obcaecati ad porro voluptatibus ab, sint adipisci perferendis eum culpa accusamus repellendus quaerat odit quod natus, accusantium quam reprehenderit assumenda in!
                                    </Typography>
                                </Box>
                            </Modal>
                            <button
                                onClick={
                                    () => handleBuyNow(searchParams)}
                                className="btn mt-7 text-xl hover:scale-105 transition-all mb-2">Add to cart</button>
                        </div>
                    </div>



                </div>

            </div>
            <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
            <Footer />
        </div>
    );
}

export default SinglePage;
