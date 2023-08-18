import socket
import threading

def handle_client(client_socket):
    user = client_socket.recv(2048).decode('utf-8')
    print('User:', user, 'joined the chat.')

    while True:
        try:
            message = client_socket.recv(2048).decode('utf-8')
            if message:
                print('Received message:', message)
                response = input('Enter response: ')
                client_socket.send(response.encode('utf-8'))
        except socket.error as e:
            print(str(e))
            break

    client_socket.close()

def start_server():
    server_socket = socket.socket()
    host = '127.0.0.1'
    port = 2001

    server_socket.bind((host, port))
    server_socket.listen(5)
    print('Server is listening on {}:{}'.format(host, port))

    while True:
        client_socket, address = server_socket.accept()
        print('Connected to {}:{}'.format(address[0], address[1]))
        threading.Thread(target=handle_client, args=(client_socket,)).start()

start_server()
