from flask import Flask, request, render_template

app = Flask(__name__, static_url_path='', static_folder='')

@app.route('/')
def root():
    return app.send_static_file('event.html')

Print('This is Auschwin')
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True