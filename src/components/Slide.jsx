import PropTypes from 'prop-types';

const Slide = ({ fakeDatum }) => {

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
        <div className="border-2 h-96" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h2 className="text-3xl">{estate_title}</h2>
            <h2 className="text-xl">{segment_name}</h2>
            <p className="dark:text-gray-800">{description.slice(0, 150)} </p>
        </div>
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