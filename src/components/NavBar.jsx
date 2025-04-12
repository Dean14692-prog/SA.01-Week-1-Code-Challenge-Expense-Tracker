export default function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-3 py-2 rounded-3 shadow-sm border w-90 mb-1"
      style={{ backgroundColor: "#0d6efd", height: "80px" }}
    >
      <nav className="navbar" data-bs-theme="light">
        <form className="d-flex" role="search">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <span className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>
        </form>
      </nav>

      <div className="text-end">
        <h4 className="text-dark mb-1">Expense Tracker</h4>
        <p className="mb-0 small">
          Take control of your finances Record, Categorize and Analyze.
        </p>
      </div>
    </div>
  );
}
