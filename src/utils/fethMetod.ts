import { apiUrl } from "../config/api";

export const fetchPOST = async (path: string, obj: any): Promise<any> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });
    
    return await res.json();
};

export const fetchPUT = async (path: string, obj: any): Promise<Response> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });

    return await res.json();
};