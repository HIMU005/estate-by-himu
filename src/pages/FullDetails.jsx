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
                <img src={image} alt="" className="object-cover object-center w-full rounded-md max-h-[450px]  dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-3xl font-bold tracking-widest uppercase dark:text-violet-600">{estate_title} </span>
                    <div className="flex justify-between items-center gap-4">
                        <h2 className="text-2xl font-semibold tracking-wide">{segment_name}</h2>
                        <h2 className="text-2xl font-semibold tracking-wide bg-accent px-3 py-2 rounded-2xl"> for {status}</h2>
                    </div>
                    <h2 className="flex gap-2 items-center"><FaLocationDot className="text-primary" /> {location}</h2>
                    <h2 className="flex gap-2 items-center"><IoPricetagsSharp /> {price}</h2>
                    <h2>Area : {area}</h2>
                    <div className="flex gap-4">
                        {
                            facilities.map((facility, idx) => <h2 className="flex gap-3 items-center" key={idx}><FaGrinStars className="text-secondary" /> {facility}</h2>)
                        }
                    </div>
                </div>

                <p className="dark:text-gray-800">{description}</p>
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