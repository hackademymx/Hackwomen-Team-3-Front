/* eslint-disable import/order */
import { API_URL } from "../utils/const";
import axios from "axios";

export const getPlaces = async () => {
    try {
        const url=`${API_URL}/api/v1/place`;
        const { data,status }=await axios.get(url)
        return { data, status };
    } catch(error){
        const { data,status } = error.response
        return { data,status };
    }
};

export const addPlaces=async()=>{}