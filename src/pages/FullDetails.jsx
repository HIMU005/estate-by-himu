import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../routes/provider/AuthProvider";
import { FaLocationDot } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaGrinStars } from "react-icons/fa";
import { Helmet } from "react-helmet-async";




const FullDetails = () => {
    const { fakeData } = useContext(AuthContext);
    const { _id } = useParams();
    const fakeDatum = fakeData[_id - 1];


    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
    } = fakeDatum;



    return (
        <div>
            <Helmet>
                <title>E-State/{segment_name}</title>
            </Helmet>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img
                    data-aos="fade-left"
                    data-aos-delay="100"
                    src={image} alt="" className="object-cover object-center w-full rounded-md max-h-[450px]  dark:bg-gray-500" />

                <div className="mt-6 mb-2">
                    <span
                        data-aos="fade-left"
                        data-aos-delay="500"
                        className="block text-lg md:text-3xl lg:text-5xl font-bold tracking-widest uppercase dark:text-violet-600">{estate_title} </span>

                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <h2
                            data-aos="fade-left"
                            data-aos-delay="1000"
                            className=" text-lg md:text-xl lg:text-2xl font-semibold tracking-wide">{segment_name}
                        </h2>

                        <h2
                            data-aos="fade-right"
                            data-aos-delay="1000"
                            className="text-2xl font-semibold tracking-wide bg-accent pl-4 md:pl-0 md:px-3 py-2 rounded-2xl w-44 md:w-auto"> for {status}
                        </h2>
                    </div>
                    <h2
                        data-aos="fade-left"
                        data-aos-delay="1500"
                        className="flex gap-2 items-center"><FaLocationDot className="text-primary" /> {location}
                    </h2>
                    <h2
                        data-aos="fade-left"
                        data-aos-delay="1500"
                        className="flex gap-2 items-center my-2"><IoPricetagsSharp /> {price}
                    </h2>
                    <h2
                        data-aos="fade-left"
                        data-aos-delay="1500" >
                        Area : {area}
                    </h2>
                    <div
                        data-aos="fade-left"
                        data-aos-delay='4500'
                        // data-aos-duration="500"
                        className="flex gap-4 my-2 text-lg">
                        {
                            facilities.map((facility, idx) =>
                                <h2
                                    // data-aos="fade-up"
                                    // data-aos-delay={4500 + idx * 500}
                                    className="flex gap-3 items-center" key={idx}><FaGrinStars className="text-secondary" /> {facility}
                                </h2>)
                        }
                    </div>
                </div>

                <p
                    data-aos="zoom-in-up"
                    data-aos-delay="5000"
                    className="text-xl text-justify">{description}</p>
            </div>
        </div>
    );
};

export default FullDetails;

FullDetails.propTypes = {

    id: PropTypes.number,
    fakeDatum: PropTypes.object,
    image: PropTypes.string,
    estate_title: PropTypes.string,
    segment_name: PropTypes.string,
}