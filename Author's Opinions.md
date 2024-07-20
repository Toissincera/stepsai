# The author's opinions and future improvement plans
## Authentication
+ +++ Doctors can register and login seamlessly
+ +++ Credentials are validated, stored, and secured
- --- We CANNOT have any "doctor" signup, and find patient details via their UUID. HIPAA?? HELLO??
- --- Improve email and password validation, this is just basic yup
- --- Hash and salt and hash your passwords again!!!
- --- Do NOT store passwords or hashes in patients table!!!
## PDF
+ +++ PDFs may be uploaded seamlessly
+ +++ Every PDF is a child of a doctor
- --- Connect PDFs to both a doctor and a patient, when uploading
## Linking
+ +++ Doctors can link to patients seamlessly
- --- Doctor / patient relationships should be twokey, this is a liability our insurance would pre-skewer us for
## Schema
+ +++ LGTM
## Frontend / Backend
+ +++ LGTM
