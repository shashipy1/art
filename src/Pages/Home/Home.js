import React from 'react';
import '../Index.css';
import img1 from '../../Images/1.jpg';
import img2 from '../../Images/2.jpg';
import img3 from '../../Images/3.jpg';
import img4 from '../../Images/4.jpg';
import img5 from '../../Images/5.jpg';
import img6 from '../../Images/6.jpg';
import img7 from '../../Images/7.jpg';
import img8 from '../../Images/8.jpg';
import img9 from '../../Images/9.jpg';
import img10 from '../../Images/10.jpg';
import img11 from '../../Images/11.jpg';
import img12 from '../../Images/12.jpg';
import img13 from '../../Images/13.jpg';

function Home() {
    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
    return (
        <>
            <div>
                <div>
                    {imgs.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            className='img-container'
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
