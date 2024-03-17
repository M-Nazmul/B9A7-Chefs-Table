import HeaderImg from '../../assets/images/header.png'
const Header = () => {
    return (
        <div  className='max-w-[1320px] mx-auto px-6' >
            <div style={{backgroundImage: `url(${HeaderImg})`, minHeight: "600px", backgroundRepeat: "no-repeat", margin: "auto", borderRadius: "15px"}}>
            <div className="flex flex-col items-center text-center text-neutral-content pt-16 md:pt-16 pb-10  md:pb-24">
              <div className="px-10 max-w-[897px] ">
                <h1 className="w-full mb-5 text-3xl md:leading-[4rem] lg:leading-[76px] md:text-[52px] font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                <p className=" mb-8 text-[18px] font-normal max-w-[933px] mx-auto">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex flex-wrap justify-center gap-6'>
                    <button className="btn bg-[#0BE58A] hover:bg-transparent hover:text-white border-[#0BE58A] rounded-full text-xl font-semibold px-6"><a  href="#">Explore Now</a></button>
                    <button className="btn bg-transparent hover:bg-[#0BE58A] text-white hover:border-[#0BE58A] text-xl font-semibold rounded-full px-6"><a href="#">Our Feedback</a></button>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Header;