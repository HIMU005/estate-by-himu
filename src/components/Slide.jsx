import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Slide = ({ fakeDatum }) => {

    const {
        id,
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
        <Link to={`/details/${id}`}>
            <div className=" h-96" style={{
                // backgroundImage: `url(${image})`,
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='py-16 text-white px-16'>
                    <h2 className="text-5xl ">{estate_title}</h2>
                    <h2 className="text-xl my-3">{segment_name}</h2>
                    <p className="">{description.slice(0, 150)} </p>
                    <h2 className='my-3 font-bold text-lg'>{price}  <span className='ml-4 text-primary'>ON {status}</span></h2>
                </div>
            </div>
        </Link>
    );
};

export default Slide;
Slide.propTypes = {

    id: PropTypes.number,
    fakeDatum: PropTypes.object,
    image: PropTypes.string,
    estate_title: PropTypes.string,
    segment_name: PropTypes.string,
}