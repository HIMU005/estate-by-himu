
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShortDetails = ({ fakeDatum }) => {
    const {
        id,
        estate_title,
        segment_name,
        description,
        // price,
        // status,
        // area,
        // location,
        // facilities,
        image,
    } = fakeDatum;

    return (
        <div>
            <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-lg font-medium tracking-widest uppercase dark:text-violet-600">{estate_title}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{segment_name}</h2>
                </div>


                <div className='container'>
                    <p className="dark:text-gray-800">{description.slice(0, 150)} </p>
                    <Link to={{
                        pathname: `/details/${id}`,
                        state: { fakeDatum }
                    }} className='btn btn-link'>Read More</Link>
                </div>
            </div>
        </div>
    );
};
export default ShortDetails;

ShortDetails.propTypes = {
    id: PropTypes.number,
    fakeDatum: PropTypes.object,
    image: PropTypes.string,
    estate_title: PropTypes.string,
    segment_name: PropTypes.string,
}