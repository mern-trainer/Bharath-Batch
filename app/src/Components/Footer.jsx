import { FaCopyright } from "react-icons/fa"

const Footer = () => {
    return <div className="text-center py-2 bg-secondary text-light">
        <FaCopyright /> Copyright 2023 - { new Date().getFullYear()}
    </div>
}

export default Footer