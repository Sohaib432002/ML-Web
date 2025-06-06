import { useState } from "react"; 
const section_3 = (selected, setselected) => {
    const [show1,setshow1]=useState(false)
    return (
        <div className="section_3" id="about">
            <div className="heading_contact" >
                <h1 style={{ position: 'relative' }}>ABOUT US
                    <img src="/images/grop.png" alt="error" style={{
                        position: 'absolute', zIndex: -1, left: 0, top: -60
                    }} /></h1>
                <div className="about_us">
                    <div className="left_side_about">
                        <h4 style={{display:'flex',justifyContent:"space-between",alignItems:'center'}}>ABOUT ISA <img  src="/images/about_us_logo.png" width={60} height={60} alt="" /></h4>
                        <p>Ex Exercitation reprehenderit elit ullamco dolore labore occaecat id qui nisi pariatur. Eiusmod magna voluptate cupidatat quis ad. Laboris exercitation elit nostrud nisi laboris mollit ipsum aliquip ea. Voluptate exepteur laborum ad reprehenderit exercitation. Ex Exercitation reprehenderit elit ullamco dolore labore occaecat id qui nisi pariatur. Eiusmod magna volup Ex Exercitation reprehenderit elit ullamco dolore labore occaecat id qui nisi pariatur. Eiusmod magna volup</p>
                    </div>
                    <div className="right_side_about">
                        <img src="/images/about_us_logo.png" alt="Error" />
                    </div>
                </div>
                <div className="member_about_container">
                    <div className="team" >
                        <h3>Our Team</h3>
                        <div>
                            <div className="continer_name"
                                onClick={() => {
                                    setshow1(!show1);
                                }}>
                                <p>Muhammad Sohaib Maqsood</p>
                            </div>
                            <div className="continer_name" onClick={() => alert('clicked')} >
                                <p>Muhammad Awais</p>
                            </div>
                        </div>

                    </div>
                    <div className="team_member_about" style={{ color: 'white'  }}>
                        {show1?
                            <div className="img_container">
                                <img className="img1" width={210} height={300} src="/images/Rectangle 29.png" alt="Error" />

                                <div className="img2">
                                    <h2>Muhammad Sohaib Maqsood</h2>
                                    <p>Web-Develpor</p>
                                    <img src="/images/IMG_8377 1.png" alt="Error" />
                                    <div className="img_social" >
                                        <img onClick={() => alert('Linkten')} src="/images/akar-icons_linkedin-fill.png" width={42} height={41} alt="Error" />
                                        <img onClick={() => alert('github')} src="/images/jam_github.png" width={42} height={41} alt="Error" />
                                    </div>
                                </div>
                            </div> : ''
                        }

                    </div>
                    <div className="image">
                        <img src="/images/Saly-13.png" alt="Error" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default section_3