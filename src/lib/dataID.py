import json

with open('c.json') as data:
    events = json.load(data)['events']

new_events = []
counter = 0
for e in events:
    e['id'] = f'CF{str(counter).zfill(2)}'
    new_events.append(e)
    counter += 1

print(json.dumps({'events': new_events}, indent = 2))
