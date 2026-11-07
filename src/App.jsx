
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import { searchEmployees } from "./services/employeeService";
import "./App.css";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    
    useEffect(() => {
        const controller = new AbortController();

        async function fetchEmployees() {
            setLoading(true);
            setError("");

            if (!debouncedSearch.trim()) {
                setEmployees([]);
                setLoading(false);
                setError("");
                return;
            }
            try {
                const data = await searchEmployees(
                    debouncedSearch,
                    controller.signal
                );

                setEmployees(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                    setEmployees([]);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchEmployees();

        return () => controller.abort();
    }, [debouncedSearch]);

    return (
        <div className="app-container">
            <h1>Employee Directory</h1>

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            {loading && <p>Loading employees...</p>}

            {error && <p>{error}</p>}

            {!loading && !error && (
                <EmployeeList employees={employees} />
            )}
        </div>
    );
}

export default App;
