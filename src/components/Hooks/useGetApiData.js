import { useEffect , useState } from "react";

const useGetApiData = () => {

    const [services, setServices] = useState([])

    const getServices = () => {
        fetch("https://morsalinkausar043.github.io/servicesapi/Servicedata.json")
            .then(res => res.json())
            .then(apiData => setServices(apiData))
    }

    useEffect(getServices, []);
    
    return services;
    
};

export default useGetApiData;