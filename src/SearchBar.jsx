function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <input
            className="search-input"
            type="text"
            placeholder="Search by employee name or department..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}

export default SearchBar;