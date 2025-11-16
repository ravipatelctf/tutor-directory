const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

//-------------------------------------------------------------------------------------------
export async function getAllTutors(formData) {
    try {
        const params = new URLSearchParams(formData).toString();
        const response = await fetch(`${SERVER_BASE_URL}/api/v1/tutors?${params}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data!")
        }

        const data = await response.json()
        // console.log(data);
        return data
    } catch (error) {
        throw error
    }
}

//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
export async function addNewTutor(formData) {
    try {
        const response = await fetch(`${SERVER_BASE_URL}/api/v1/tutors`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data!")
        }

        const data = await response.json()
        // console.log(data);
        return data
    } catch (error) {
        throw error
    }
}
//-------------------------------------------------------------------------------------------