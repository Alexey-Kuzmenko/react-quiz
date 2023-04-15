import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { autoLogout, closeSession } from "../../store/logoutSlice";
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