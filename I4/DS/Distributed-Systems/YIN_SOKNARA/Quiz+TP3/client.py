import socket

def start_client():
    client_socket = socket.socket()
    host = '127.0.0.1'
    port = 2001

    client_socket.connect((host, port))
    print('Connected to {}:{}'.format(host, port))

    user = input('Enter your name: ')
    client_socket.send(user.encode('utf-8'))

    while True:
        message = input('Enter message: ')
        client_socket.send(message.encode('utf-8'))
        response = client_socket.recv(2048).decode('utf-8')
        print('Received response:', response)

start_client()
