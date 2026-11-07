const API_URL = import.meta.env.VITE_API_URL;

export async function searchEmployees(searchTerm, signal) {
    if (!API_URL) {
        throw new Error("API URL is not configured.");
    }

    const response = await fetch(
        `${API_URL}/employees?search=${encodeURIComponent(searchTerm)}`,
        { signal }
    );

    if (!response.ok) {
        throw new Error("Unable to fetch employees. Please try again.");
    }

    return await response.json();
}