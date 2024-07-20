"npm run dev" at root to run, no backend initialization needed hehe

# Roadmap
Task:

DONE     Implement a form where doctors can sign up by entering their name, email, password, and specialty.
DONE     Allow existing users to log in using their email and password.
DONE     Validate the input data (e.g., email format, password strength).
DONE     Store the doctor’s information in a secure database (e.g., DynamoDB or PostgreSQL).

DONE     Once logged in, allow doctors to upload PDF files.
DONE     Store the uploaded PDFs in a storage service (e.g., Amazon S3).
DONE     Associate uploaded PDFs with the logged-in doctor in the database.

DONE     Allow doctors to link their profiles with patient profiles.
DONE     Implement functionality to assign or link a patient to a doctor.
DONE     Store the doctor-patient relationship in the database.

DONE     Design a database schema for storing doctor accounts, patient accounts, uploaded PDFs, and doctor-patient relationships.
DONE     Ensure efficient retrieval and association of PDFs and patient profiles with the corresponding doctor.

REACT    Use a frontend framework like React for the UI.
BETTER   Implement the backend using Node.js, Python, or any preferred language/framework.
DONE     Ensure that the frontend communicates with the backend securely (e.g., HTTPS).
