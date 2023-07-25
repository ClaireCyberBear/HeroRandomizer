import sqlite3
import json

conn = sqlite3.connect('herodata.db')
conn.row_factory = sqlite3.Row


cursor = conn.cursor()


cursor.execute('SELECT * FROM heroes')


rows = [dict(row) for row in cursor.fetchall()]


json_data = json.dumps(rows, indent=4)


with open('herodata.json', 'w') as json_file:
    json_file.write(json_data)
