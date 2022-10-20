import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const MovieSocialInfo = ({ detail }) => {
    return (
        <div>
            <div className='movie_social_details'>
                <ul className='movie_social_list'>
                    <li><FontAwesomeIcon icon={faImdb} size="2xl" />{detail.vote_average}
                    </li>
                    <li>  <FontAwesomeIcon icon={faUsers} />{detail.popularity}</li>
                    <li>{detail.adult ? "18세 이상만" : "Under 18"}</li>
                </ul>
            </div>
        </div>
    )
}

export default MovieSocialInfo

