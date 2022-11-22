install:
	npm ci
brain-games:
	node bin/brain-games.j
publish: 
	npm publish --dry-run
