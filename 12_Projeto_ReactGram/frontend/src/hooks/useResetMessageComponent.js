// Redux
import { resetMessage as resetPhotoMessage} from "../slices/photoSlice";

export const useResetMessageComponent = (dispatch) => {
    return () => {
        setTimeout(()=>{
            dispatch(resetPhotoMessage())
        }, 2000)
    }
}