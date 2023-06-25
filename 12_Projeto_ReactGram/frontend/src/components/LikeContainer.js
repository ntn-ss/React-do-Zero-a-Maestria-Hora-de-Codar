import './LikeContainer.css'

import {BsHeart, BsHeartFill} from 'react-icons/bs'

const LikeContainer = ({photo, user, handleLike}) => {
    if (!photo || !photo._id) {
        return null; // Render nothing if photo is undefined or doesn't have _id
      }
    return (
        <div className="like">
            {photo.likes && user && (
                <>
                    {photo.likes.includes(user._id) ? (
                        <BsHeartFill />
                    ) : (
                        <BsHeart onClick={()=>handleLike(photo)}/>
                    )}
                    <p>{photo.likes.length} curtida(s).</p>
                </>
            )}
        </div>
    )
}

export default LikeContainer