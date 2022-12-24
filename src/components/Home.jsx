import React from 'react'
import Search from './Search'

import bg from "../assets/2.webp"

import { IoLogoGoogle } from "react-icons/io"
import { SiNetflix } from "react-icons/si"
import { BsMicrosoft } from "react-icons/bs"
import { SiZomato } from "react-icons/si"
import { SiAdobe } from "react-icons/si"
import { TbBrandMeta } from "react-icons/tb"

function Home() {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>CodeMaster</h1>
                    <p>Solution to all your problems</p>
                    <Search />
                </main>
            </div>
            <div className="home2">
                <img src={bg} alt="Graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eveniet qui eligendi iste dolores error? Id culpa repudiandae quos quisquam?

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sequi molestiae! Praesentium eligendi sapiente obcaecati reprehenderit sed iusto temporibus delectus!
                    </p>
                </div>
            </div>


            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magnam distinctio ullam provident placeat possimus optio cum, velit quibusdam, voluptas deleniti! Ducimus facilis pariatur facere libero. Magni eos excepturi vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit consequuntur explicabo voluptates voluptatem, fuga quaerat voluptatum. Consequatur quas aspernatur, cum a labore nemo assumenda. Provident, alias possimus. Ad, voluptatibus!

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos libero animi deleniti a aliquid dolor quisquam rem rerum vitae inventore suscipit voluptatibus assumenda numquam et alias, saepe modi commodi odio possimus dolore dolorum placeat, iusto perferendis minus! Facilis, inventore earum?

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rerum molestias alias repellat laboriosam labore rem necessitatibus excepturi odit, eveniet suscipit impedit, libero itaque, a modi hic. Reprehenderit repellat ducimus necessitatibus odio, ab, ad odit nemo nisi sed id dolor natus dolore ratione delectus consequatur dicta illum. Voluptates, illum nostrum!
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div className='outerhome4Container'>
                    <h1> Brands following us</h1>
                    <div className='innerContainer'>

                        <div className="icoContainer">
                            <IoLogoGoogle className='googleLogo' />
                            <SiNetflix className='Logo' />
                            <BsMicrosoft className='googleLogo' />
                            <SiZomato className='Logo' />
                            <SiAdobe className='googleLogo' />
                            <TbBrandMeta className='Logo' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home