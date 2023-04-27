import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSession } from "../../store/logoutSlice";
import { Navigate } from "react-router-dom";

function Logout() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeSession())
    }, [])

    return (
        <Navigate to={"/"} replace />
    )
}

export default Logout;