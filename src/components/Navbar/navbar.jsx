import React, { useState, useEffect } from "react";
// import useStyles from  './styles';
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({print}) => {

    const [isVisible, setVisible] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        if (window.location.pathname === '/dashboard') {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [window.location.pathname]);

    const dashboard = () => {
        navigate("/dashboard", { state: { isVisible: true } });
    };

    const home = () => {
        navigate("/home");
        setVisible(false);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
            });
        // localStorage.clear();
        // history.push("/");
    };

    return (
        <div className="navbar">
            <div className="title">
                <h2>Expense Tracker Application</h2>
            </div>
            <div className="right">
                <button className="btn" onClick={home}>
                    Home
                </button>
                <button className="btn" onClick={dashboard}>
                    Dashboard
                </button>
                {isVisible && (<button className="btn" onClick={() => {print()} }>
                    Generate Pdf
                </button>)}
                <button className="btn" onClick={logOut}>
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Navbar;