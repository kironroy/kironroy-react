import React from "react";
// import "./ErrorPage.css"; // Optional: Add your styles in this CSS file.

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.errorContainer}>
        <div style={styles.errorCode}>404</div>
        <div style={styles.errorMessage}>
          Oops! The page you're looking for doesn't exist.
        </div>
        <a href="https://kironroyreact.netlify.app/" style={styles.homeButton}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

// Inline styles (you can also move these to an external CSS file)
const styles = {
  container: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  errorContainer: {
    textAlign: "center",
  },
  errorCode: {
    fontSize: "8rem",
    fontWeight: "bold",
    color: "#ff6347",
  },
  errorMessage: {
    fontSize: "1.5rem",
    margin: "20px 0",
  },
  homeButton: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    hover: {
      backgroundColor: "#0056b3",
    },
  },
};

export default ErrorPage;
