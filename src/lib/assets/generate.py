from pathlib import Path

path = Path("./src/lib/assets/CoreTeam")
for p in path.glob("*"):
     print(f'import {p.name.split(".")[0]} from "$libS\\src\\assets\\CoreTeam\\{p.name}\"')

