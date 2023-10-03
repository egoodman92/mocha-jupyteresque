# mocha-jupyteresque

This project is a basic implementation of a Jupyter Notebook-like application. It allows you to create Python code snippets in a web-based UI, execute them, and view the results. The project utilizes Flask for the backend and React for the frontend.

## Prerequisites
Ensure that you have the following installed on your local machine:

Python (>=3.6)
Node.js and npm

## Installing Dependencies
### Backend

Navigate to the project's root directory and install the Python dependencies:

```
pip install Flask Flask-CORS
```

### Frontend
Navigate to the React app directory (./react/my-app) and install the Node.js dependencies:

```
cd react
npm install
```

## Running the Applications
### Backend

Navigate to the project's root directory and run the Flask app:

```
python app.py
```
Your Flask API should now be running on http://localhost:5000.

### Frontend
Navigate to the React app directory and start the app:

```
cd react/my-app
npm start
```

Your React app should now be running on http://localhost:3000.

## Usage
Navigate to your React app in your web browser.
Enter your Python code into the textarea.
Click the "Run Code" button.
View the code output below the button.
Security Warning
Please note that this application executes Python code received from the frontend and is not secured against malicious inputs. This project should only be used in a safe and controlled environment and is not suitable for production use in its current state.

## Acknowledgements
Flask: http://flask.palletsprojects.com/
React: https://reactjs.org/
Axios: https://axios-http.com/
Flask-CORS: https://flask-cors.readthedocs.io/
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
