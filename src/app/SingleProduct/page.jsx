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

function SinglePage({ searchParams, username }) {
    const { id, name, picture, tag, price } = searchParams;


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [toogle, setToogle] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };


    const handleBuyNow = useCallback(async (searchParams) => {
        console.log("Adding to cart => ", searchParams);
        const items = { ...searchParams, username };
        console.log("Adding to cart with username => ", items);

        try {
            const response = await axios.post('/api/Users/Cart', [items]);
            if (response.data.success) {
                setSelectedItems((prevItems) => [...prevItems, items]);
                setToogle(prevState => !prevState);
                toast.success("Item Successfully added to cart");
                setIsDrawerOpen(true);
            } else {
                console.error("Failed to add item to cart:", response.data);
                toast.error("Failed to add item to cart");
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
            toast.error("Error adding item to cart");
        }
    }, [username]);


    useEffect(() => {
        console.log("Selected Items in Drawer:", selectedItems);
    }, [selectedItems]);



    return (
        <div className="flex flex-col gap-10 sm:mt-0 mt-5">
            <div className='w-full sm:ml-0 ml-14'>
                <Navbar />
            </div>
            <div
                key={id}
                className='flex md:flex-row flex-col  items-center justify-center ml-6 md:items-center md:justify-center  gap-4 md:gap-16 md:-ml-24 mt-6 '>
                <Image
                    className='sm:-mt-20 mt-2 sm:ml-0 ml-16'
                    src={picture}
                    alt='shoes'
                    width={650}
                    height={700}
                // style={{height:'auto', width:'auto'}}
                />
                <div className=' flex flex-col md:ml-0 ml-14 sm:text-center items-center justify-center  px-6 md:mt-12 mt-6'>
                    <h2 className='md:text-4xl text-2xl font-bold mb-4'>{name}</h2>
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

                    <div className='mt-5 text-center'>
                        <p className='font-semibold font-serif text-2xl'>Select Size (Size guide)</p>

                        <div className="mt-2 flex w-full items-center justify-center flex-wrap gap-5">
                            <button className="w-20 rounded-md border-2 border-zinc-600 p-1 text-lg transition-all 2xl:w-28 2xl:py-2false border-black/5 hover:bg-black text-zinc-600 hover:text-white " disabled="">40</button>
                            <button className="w-20 rounded-md border-2 border-zinc-600 p-1 text-lg transition-all 2xl:w-28 2xl:py-2 text-zinc-600 hover:border-black hover:bg-black hover:text-white false"
                            > 41</button>
                            <button className="  w-20 rounded-md border-2 border-zinc-600 p-1 text-lg transition-all 2xl:w-28 2xl:py-2  text-zinc-600 hover:border-black hover:bg-black hover:text-white  false">42</button>
                        </div>
                        <p className='mt-5 w-96 text-justify text-lg '>
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
            <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} setToogle={setToogle} />
            <Footer />
        </div>
    );
}

export default SinglePage;
