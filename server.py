#!/usr/bin/env python3
"""Static server with correct MIME types for ES modules."""

import http.server
import socketserver

PORT = 8080

MIME = {
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.html': 'text/html',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.webp': 'image/webp',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
}


class Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        ext = __import__('os').path.splitext(path)[1].lower()
        if ext in MIME:
            return MIME[ext]
        return super().guess_type(path)


if __name__ == '__main__':
    with socketserver.TCPServer(('', PORT), Handler) as httpd:
        print(f'Serving at http://localhost:{PORT}')
        httpd.serve_forever()
