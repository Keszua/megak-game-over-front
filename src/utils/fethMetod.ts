import { apiUrl } from "../config/api";

export const fetchGET = async (path: string): Promise<any> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'GET',
        credentials: 'include',
    });

    return await res.json();
};

export const fetchPOST = async (path: string, obj: any): Promise<any> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });
    
    return await res.json();
};

export const fetchPUT = async (path: string, obj: any): Promise<any> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });

    return await res.json();
};

export const fetchDELETE = async (path: string ): Promise<any> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'DELETE',
        credentials: 'include',
    });

    return await res.json();
};

export const fetchPHOTO = async (path: string, formData: FormData ): Promise<any> => {
    const res = await fetch(`${apiUrl}${path}`, {
        method: 'POST',
        body: formData
    });

    return await res.json();
};