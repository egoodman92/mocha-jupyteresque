from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS library
import subprocess
import sys

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/run_code', methods=['POST'])
def run_code():
    code = request.json.get('code')
    try:
        result = subprocess.check_output([sys.executable, "-c", code], stderr=subprocess.STDOUT, text=True)
    except subprocess.CalledProcessError as e:
        result = e.output
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
